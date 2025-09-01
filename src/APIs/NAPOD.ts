export interface NasaApodResponse {
    title: string;
    url: string;
    explanation: string;
    media_type: string;
    thumbnail_url: string;
    date: string;
    resource: string;
    copyright: string;
    hdurl: string;
}

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const apiURL = import.meta.env.VITE_NASA_API_URL;

export const getNAPOD = async (): Promise<NasaApodResponse> => {
    const response = await fetch(`${apiURL}?api_key=${apiKey}`);
    if (!response.ok) {
        throw new Error('Failed to fetch NASA APOD');
    }
    return await response.json();
};
