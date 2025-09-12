import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN; // 🔑 Stocke ton token en variable d’environnement
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&limit=10&access_token=${token}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur Instagram API:", error);
    res.status(500).json({ error: "Impossible de récupérer les posts." });
  }
}
