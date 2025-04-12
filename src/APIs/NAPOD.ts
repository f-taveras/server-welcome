// src/api/getNAPOD.ts
export interface NasaApodResponse {
    title: string;
    url: string;
    explanation: string;
    media_type: string;
}

const apiKey = import.meta.env.VITE_NASA_API_KEY;
// const apiKey = 'DEMO_KEY'; // Replace with your actual API key
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

export const getNAPOD = async (): Promise<NasaApodResponse> => {
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error('Failed to fetch NASA APOD');
    }
    return await response.json();
};
