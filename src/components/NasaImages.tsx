import { formatDate, substractYear} from "@/utils/date";
import Image from 'next/image';

export async function NasaImages() {
    
    const today = formatDate(substractYear(new Date()));
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.NASA}&earth_date=${today}`)
    const {photos} = await response.json();
    const num = Math.floor(Math.random() * (0 - photos.length)) + photos.length;
    const selectedPhoto = photos[num];

    return(
        <div className="nasa-images-container">
            <Image src={selectedPhoto.img_src} alt={selectedPhoto.sol} width={200} height={200}/>
        </div>
    )
}