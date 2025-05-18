// src/api/gemini.js
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini client with API key from .env
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

/**
 * Generate content from Gemini API
 * @param {string} prompt - The text prompt to send to the model
 * @param {string} modelName - (Optional) Model name, default is 'gemini-pro'
 * @returns {Promise<string>} - Response text from Gemini
 */
export const generateGeminiContent = async (prompt, modelName = 'gemini-pro') => {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Error fetching response from Gemini API.';
  }
};
