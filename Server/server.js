import express from 'express';
import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';
import cors from 'cors';
import fetch from "node-fetch"; 
import { JSDOM } from "jsdom"; 


const app = express();
app.use(express.json());
app.use(cors()); // allow requests from your Vite frontend
const port = process.env.PORT;

const extractTextFromHTML = (html) => {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // Remove scripts and styles
  document.querySelectorAll("script, style, noscript,header, footer, aside").forEach(e => e.remove());
  const article = document.querySelector("mainContainer"); // try to grab the main article
  if (article) {
    return article.textContent.trim();
  }

  // fallback: entire body
  return document.body.textContent.trim();
};

const ai = new GoogleGenAI({});

app.post('/generate', async (req, res) => {
  const { url } = req.body; 
  console.log(url);
  const articleResponse = await fetch(url);
  const html = await articleResponse.text();
  const content = extractTextFromHTML(html).slice(0, 4000);

  try {
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarise this article, include the header\n\n ${content}`
    });
    res.json({ text: response.text });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));