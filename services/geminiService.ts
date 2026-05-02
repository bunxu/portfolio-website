
import { GoogleGenAI } from "@google/genai";

export const getUXAdvice = async (message: string): Promise<string> => {
  // Create a new instance right before making an API call to ensure it uses the up-to-date key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are a world-class UX Design Mentor. Your goal is to provide concise, actionable, and encouraging design advice to junior designers or curious users. 
        Focus on heuristics (like Nielsen Norman), accessibility (WCAG), and user-centricity. Keep responses professional yet friendly.`,
      },
    });

    return response.text || "I'm sorry, I couldn't generate advice at this moment. Please try again.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Check for "Requested entity was not found" which usually indicates a key/project issue
    if (error?.message?.includes("Requested entity was not found")) {
      return "AUTHENTICATION_ERROR: Please re-select your API key using the 'Update API Key' button.";
    }
    
    return "Error connecting to the UX Mentor. Please ensure your API key is correctly configured and has billing enabled.";
  }
};
