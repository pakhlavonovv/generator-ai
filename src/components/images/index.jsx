import { useState, useEffect } from "react";
import Loading from "../loading";

const imagePaths = [
  "https://i.ibb.co/q3hHfj7h/image-1.webp",
  "https://i.ibb.co/gb2QffQQ/Image2.png",
  "https://i.ibb.co/8DqJVynv/image-3.webp",
  "https://i.ibb.co/cSBnCMrd/image-4.jpg",
  "https://i.ibb.co/0pT8t0dd/image-5.jpg",
  "https://i.ibb.co/RkFQxvmf/image-6.jpg",
  "https://i.ibb.co/mCy51jpj/image-7.webp",
  "https://i.ibb.co/ymhLQyc4/image-8.webp",
  "https://i.ibb.co/vC9DZ1nf/image-9.webp",
  "https://i.ibb.co/8g5g7mkF/image-10.webp",
  "https://i.ibb.co/svbk1527/image-11.webp",
  "https://i.ibb.co/4w4n61nt/image-12.png",
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
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/fallback.jpg";
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;
