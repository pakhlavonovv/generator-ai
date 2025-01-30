import { useState, useEffect } from "react";
import Loading from "../loading";

const imagePaths = [
  "/images/image-1.webp",
  "/images/image-2.png",
  "/images/image-3.webp",
  "/images/image-4.jpg",
  "/images/image-5.jpg",
  "/images/image-6.jpg",
  "/images/image-7.webp",
  "/images/image-8.webp",
  "/images/image-9.webp",
  "/images/image-10.webp",
  "/images/image-11.webp",
  "/images/image-12.png",
];

const Images = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imagePaths.map(async (path) => {
        const img = new Image();
        img.src = path;
        await img.decode(); 
        return path;
      });

      const resolvedImages = await Promise.all(imagePromises);
      setLoadedImages(resolvedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="mt-[30px] flex justify-center">
    {loadedImages.length === 0 ? (
      <Loading />
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {loadedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            className="rounded-sm h-[150px] lg:h-[250px] w-full object-cover"
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    )}
  </div>
  
  
  );
};

export default Images;
