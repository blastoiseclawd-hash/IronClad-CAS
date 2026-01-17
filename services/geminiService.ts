import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

// Using the specific model requested by the user
const MODEL_NAME = "gemini-2.5-flash-preview-09-2025";

export const generateAudit = async (problem: string): Promise<AuditResult | null> => {
  try {
    // Use process.env.API_KEY directly as per guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `You are a ruthless, high-end CFO and Business Strategy Consultant for Small and Medium Businesses (SMBs). 
      A business owner has this problem: "${problem}". 
      
      Task:
      1. Estimate "Annualized Profit Bleed" for a $5M revenue business. Give a scary but realistic dollar range based on the problem.
      2. Provide a 3-step "Triage Plan" using professional, high-level financial terms.
      
      Format the response strictly as JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            bleed_estimate: {
              type: Type.STRING,
              description: "The estimated dollar amount of profit lost annually.",
            },
            triage_plan: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description: "A list of 3 strategic steps to fix the issue.",
            },
          },
          required: ["bleed_estimate", "triage_plan"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as AuditResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};