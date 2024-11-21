

// import React, { useState } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// export const  Gallery = () => {
//   const images = [
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', 
    
//     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', 
    
//     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', 
    
//     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', 
    
//     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', 
    
//     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   return (
//     <div className='gallerycenter'>
//     <div className="gallery-container">
//       <h2 className="gallery-heading">Gallery</h2>
//       <div className="gallery-grid">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="gallery-item"
//             onClick={() => {
//               setPhotoIndex(index);
//               setIsOpen(true);
//             }}
//           >
//             <img src={image} alt={`Gallery image ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex((photoIndex + 1) % images.length)
//           }
//         />
//       )}
//     </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import './Gallery.css'; // Add necessary styles here

export const Gallery = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
    <div className="gallerycenter">
      <div className="gallery-container">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="custom-lightbox">
            <div className="lightbox-overlay" onClick={closeModal}></div>
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeModal}>
                &times;
              </button>
              <button className="lightbox-prev" onClick={prevImage}>
                &#10094;
              </button>
              <img src={images[photoIndex]} alt={`Gallery image ${photoIndex + 1}`} />
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

