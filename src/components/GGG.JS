// import React, { useState } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// const Gallery = () => {
//   const images = [
//     'https://via.placeholder.com/400', // Replace these URLs with your image paths
//     'https://via.placeholder.com/400',
//     'https://via.placeholder.com/400',
//     'https://via.placeholder.com/400',
//     'https://via.placeholder.com/400',
//     'https://via.placeholder.com/400',
//     'https://via.placeholder.com/400',
//     'https://via.placeholder.com/400'
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   return (
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
//   );
// };

// export default Gallery;
