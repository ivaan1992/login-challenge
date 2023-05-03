import { formatDate, substractYear } from "./date";

export async function getNasaImage() {
    const today = formatDate(substractYear(new Date()));
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.NASA}&earth_date=${today}`)
    const {photos}: {photos: Array<any>} = await response.json();
    const end = Math.floor(Math.random() * photos.length - 1);
    const start = Math.floor(Math.random() * end);

    const selectedPhotos = photos.slice(start, end);

    return selectedPhotos;
}