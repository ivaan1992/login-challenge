"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


// import Image from 'next/image';
interface ImageCarousel {
    img_src: string;
    sol: string;
}
interface Props {
    images: ImageCarousel[]
}

export function NasaImages({images}: Props) {

    console.log(images);

    const [imageIndex, setImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[imageIndex])

    const handleAdvance = (sum: number) => {
        if(images[imageIndex + sum] != null)
            setImageIndex(imageIndex + sum);
        
    }

    useEffect(() => {
        setSelectedImage(images[imageIndex]);
    }, [imageIndex, images])

    return(
        <div className="nasa-images-container flex flex-col justify-stretch items-center">
            <div className="carousel flex rounded overflow-hidden justify-stretch items-center gap-5">
                <button 
                    className="bg-blue-950 text-white cursor-pointer w-10 h-10 flex justify-center items-center rounded-full"
                    onClick={() => handleAdvance(-1)}
                >{"<"}</button>
                <img className="w-96 object-contain" src={selectedImage.img_src} alt={selectedImage.sol} />
                <button
                    className="bg-blue-950 text-white cursor-pointer w-10 h-10 flex justify-center items-center rounded-full"
                    onClick={() => handleAdvance(+1)}
                >{">"}</button>
            </div>
            <p>Image {imageIndex + 1} out of {images.length}</p> 
        </div>
    )
}