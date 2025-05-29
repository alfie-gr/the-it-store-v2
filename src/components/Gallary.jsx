import { useState, useRef } from "react";

const images = [
  { id: 1, src: "/assets/galleryImages/frontOfShop1.JPG", alt: "Picture 1" },
  { id: 2, src: "/assets/galleryImages/frontOfShop2.JPG", alt: "Picture 2" },
  { id: 3, src: "/assets/galleryImages/frontOfShop3.JPG", alt: "Picture 2" },
  { id: 4, src: "/assets/galleryImages/frontOfShop4.JPG", alt: "Picture 2" },
  { id: 5, src: "/assets/galleryImages/shopMuseum1.JPG", alt: "Picture 2" },
  { id: 6, src: "/assets/galleryImages/shopMuseum2.JPG", alt: "Picture 2" },
  { id: 7, src: "/assets/galleryImages/shopMuseum3.JPG", alt: "Picture 2" },
  { id: 8, src: "/assets/galleryImages/storeManager.JPG", alt: "Picture 2" },
  // ...
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const imgRef = useRef(null);

  const openFullscreen = () => {
    if (imgRef.current) {
      if (imgRef.current.requestFullscreen) {
        imgRef.current.requestFullscreen();
      }
    }
  };

  const handleClick = (src) => {
    setSelectedImg(src);
    
  };

  const closeModal = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setSelectedImg(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {images.map(({ id, src, alt }) => (
          <div
            key={id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleClick(src)}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
              View
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          ref={imgRef}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}