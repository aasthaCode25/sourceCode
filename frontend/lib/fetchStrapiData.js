const BASE_URL = "http://127.0.0.1:1337/api";
const API_TOKEN = process.env.STRAPI_API_TOKEN;
export async function fetchStrapiData(endpoint) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "GET", // Explicitly set method (optional, GET is default)
        headers: {
          "Authorization": `Bearer ${API_TOKEN}`, // Include JWT token
          "Content-Type": "application/json", // Optional, Strapi usually handles this
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error(`Error fetching from ${endpoint}:`, error);
      return [];
    }
  }
