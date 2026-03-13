import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC2IKK4EMPyLJhy-RCP62g9ZSVCP2DA0RI";

const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {

  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview"
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}

export default runChat;