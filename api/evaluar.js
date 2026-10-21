export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Vercel leerá la clave de sus variables de entorno privadas
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API Key no configurada en el servidor de Vercel.' });
  }

  const { textoLectura, respuestasUsuario } = req.body;

  const prompt = `
    Eres un profesor de educación primaria evaluando la comprensión lectora de un estudiante de 5.º GRADO DE PRIMARIA (10-11 años).
    
    Lectura:
    "${textoLectura}"

    Preguntas y respuestas del estudiante:
    ${JSON.stringify(respuestasUsuario, null, 2)}

    CRITERIOS DE EVALUACIÓN PARA 5.º DE PRIMARIA:
    1. Para preguntas "Directa" e "Inferencia":
       - Marca esCorrecta: true o false según corresponda.
       - nivelArgumento debe ser null.

    2. Para preguntas "Argumentativa":
       - Ajusta tu expectativa al desarrollo cognitivo de un niño de 10-11 años.
       - Marca esCorrecta: true SI la respuesta demuestra comprensión.
       - Clasifica la argumentación en "nivelArgumento" (1, 2 o 3):
         * 1 = "Muy bien (Excelente argumento)"
         * 2 = "Bien (Le faltó argumento)"
         * 3 = "Bien (Sin argumentación)"
       - Si es incoherente, marca esCorrecta: false y nivelArgumento: 3.

    3. Ortografía: NO restes puntos. Agrégalos en "notaOrtografia" como sugerencia.
    4. "retroalimentacion": Mensaje cercano y motivador para 5.º grado.

    Responde exclusivamente en JSON estricto:
    {
      "evaluaciones": [
        {
          "id": 17,
          "esCorrecta": true,
          "nivelArgumento": 1,
          "retroalimentacion": "...",
          "notaOrtografia": null
        }
      ]
    }
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
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
    return res.status(500).json({ error: error.message });
  }
}