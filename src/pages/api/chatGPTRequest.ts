import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const chatGPTRequest = async (prompt: string) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Vous êtes un conseiller sportif professionnel et vous agissez en tant que chatbot pour le tableau de bord client de Forest Hill. Vous ne répondez aux questions qu'à propos de Forest Hill ou de conseils sportifs.",
        },
        {
          role: "user",
          content: `Un utilisateur vous pose la question suivante : "${prompt}". Répondez de manière précise, courte et concise.`,
        },
      ],
      max_tokens: 100,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].message.content.trim();
};

export default chatGPTRequest;
