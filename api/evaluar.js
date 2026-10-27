export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API Key no configurada en Vercel.' });
  }

  const { textoLectura, respuestasUsuario, grado } = req.body;

  const prompt = `
    Eres un profesor de educación primaria evaluando la comprensión lectora y matemática de un estudiante de ${grado}º GRADO DE PRIMARIA.
    
    Lectura:
    "${textoLectura}"

    Preguntas y respuestas del estudiante:
    ${JSON.stringify(respuestasUsuario, null, 2)}

    CRITERIOS DE EVALUACIÓN PARA ${grado}º DE PRIMARIA:
    1. Preguntas "Directa" e "Inferencia":
       - Marca esCorrecta: true o false según corresponda.
       - nivelArgumento debe ser null.

    2. Preguntas "Argumentativa":
       - Ajusta tu expectativa analítica al desarrollo cognitivo de ${grado}º grado.
       - Marca esCorrecta: true SI demuestra comprensión.
       - Clasifica la argumentación en "nivelArgumento" (1, 2 o 3):
         * 1 = "Muy bien": Excelente argumento basado en el texto.
         * 2 = "Bien": Expresa una idea correcta acorde a su grado, pero breve.
         * 3 = "Bien": Responde con una afirmación directa sin dar razones.
       - Si es incoherente, marca esCorrecta: false y nivelArgumento: 3.

    3. Preguntas "Razonamiento matemático":
       - Evalúa si el alumno identificó la operación lógica, deductiva o el patrón correcto. 
       - Si el razonamiento lógico es sólido y adecuado para ${grado}º grado, marca esCorrecta: true, tolerando errores aritméticos simples.
       - nivelArgumento debe ser null.

    4. Ortografía: NO restes puntos. Agrégalos en "notaOrtografia" como sugerencia.
    5. "retroalimentacion": Mensaje cercano y motivador para un niño de ${grado}º grado.

    Responde exclusivamente en JSON estricto:
    {
      "evaluaciones": [
        {
          "id": 1,
          "esCorrecta": true,
          "nivelArgumento": 1,
          "retroalimentacion": "...",
          "notaOrtografia": null
        }
      ]
    }
  `;

  // Arreglo de modelos de respaldo. Se probarán en orden.
  const modelos = ["gemini-3.8-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
  let ultimoError = null;

  for (const modelo of modelos) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      const jsonTexto = data.candidates[0].content.parts[0].text;
      return res.status(200).json(JSON.parse(jsonTexto));

    } catch (error) {
      console.warn(`Intento fallido con ${modelo}:`, error.message);
      ultimoError = error.message;
      // El ciclo continúa con el siguiente modelo si este falla
    }
  }

  // Si todos los modelos fallan, se devuelve el error final
  return res.status(500).json({ error: "No se pudo conectar con ningún modelo de IA. Detalle: " + ultimoError });
}