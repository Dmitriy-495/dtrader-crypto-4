import axios from "axios";
import { config } from "../config/config.js";

export async function fetchData(endpoint: string) {
  try {
    const response = await axios.get(`${config.baseUrl}/${endpoint}`, {
      headers: { Authorization: `Bearer ${config.apiKey}` }
    });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
