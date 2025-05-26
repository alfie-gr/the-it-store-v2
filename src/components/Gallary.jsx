import { useState } from 'react';

import { CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "../index.css";

const images = [
  "/assets/IMG_1.jpg",
  "/assets/IMG_2.jpg",  
  "/assets/IMG_3.jpg",
  "/assets/IMG_4.jpg",
  // add more image URLs here
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function openLightbox(index) {
    setCurrentImage(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
    setCurrentImage(null);
  }

  function prevImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openLightbox(i)}>
            <img
              src={src}
              alt={`Gallery item ${i + 1}`}
              loading="lazy"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-5 text-white text-3xl font-bold select-none"
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={images[currentImage]}
            alt={`Gallery item ${currentImage + 1}`}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-5 text-white text-3xl font-bold select-none"
            aria-label="Next image"
          >
            ›
          </button>

          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl font-bold select-none"
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}