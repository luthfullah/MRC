import React, { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";

export const Gallery = () => {
  //   const images = [
  //     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
  //     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  //     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
  //     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  //   ];

  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    // Fetch images from API on component mount
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          // `${process.env.REACT_APP_PUBLIC_URL}/v1/b2c/productImages/get`
          "https://marakahumanitarian.shop/v1/b2c/productImages/get"
        );
        setImages(Array.isArray(response.data) ? response.data : []); // Set images if valid response
      } catch (err) {
        setError("Error fetching images: " + err.message);
      }
    };

    fetchImages();
  }, []);
  const openModal = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const prevImage = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  return (
    <div id="gallery" className="gallerycenter">
      <div className="gallery-container">
        <h2 className=" text-center justify-content-center mb-4 py-3  fs-1 fw-bolder">Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img
                src={"https://marakahumanitarian.shop" + image.images[0]}
                alt={`Gallery image ${index + 1}`}
                style={{objectFit:"cover"}}
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="custom-lightbox"
          onClick={(e) => {
            const clickX = e.clientX; // Get the horizontal position of the click
            const screenWidth = window.innerWidth; // Get the total width of the viewport
            if (clickX > screenWidth / 2) {
              nextImage(); // Click on the right side, go to next image
            } else {
              prevImage(); // Click on the left side, go to previous image
            }
          }}>
            <div className="lightbox-overlay" onClick={closeModal}></div>
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeModal}>
                &times;
              </button>
              <button className="lightbox-prev" onClick={prevImage}>
                &#10094;
              </button>
              <img
                src={
                  "https://marakahumanitarian.shop" +
                  images[photoIndex].images[0]
                }
                alt={`Gallery image ${photoIndex + 1}`}
              />
              <button className="lightbox-next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
