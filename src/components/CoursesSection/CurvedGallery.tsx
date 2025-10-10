"use client";

import React from "react";

const CurvedGallery = () => {
  return (
    <div className="gallery-container mt-24">
      {/* Left curved image */}
      <div className="image-wrapper left-curved">
        <img
          src="https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/rb.jpg"
          alt="Gallery Image 1"
          className="gallery-image"
        />
      </div>

      {/* Center rectangular image 1 */}
      <div className="image-wrapper center-rect">
        <img
          src="https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/lt.jpg"
          alt="Gallery Image 2"
          className="gallery-image"
        />
      </div>

      {/* Center rectangular image 2 */}
      <div className="image-wrapper center-rect">
        <img
          src="https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/main.jpg"
          alt="Gallery Image 3"
          className="gallery-image"
        />
      </div>

      {/* Right curved image */}
      <div className="image-wrapper right-curved">
        <img
          src="https://raw.githubusercontent.com/Kasukabe-Labs/wix-work/main/imgs/gallery/rt.jpg"
          alt="Gallery Image 4"
          className="gallery-image"
        />
      </div>

      <style jsx>{`
        .gallery-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          width: 100%;
          perspective: 1000px;
          padding: 10px;
        }

        .image-wrapper {
          position: relative;
          height: 250px;
          border: 0.5px solid #e59935;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .image-wrapper:hover {
          transform: scale(1.05);
        }

        /* Left curved image */
        .left-curved {
          width: 250px;
          transform: perspective(600px) rotateY(15deg);
          transform-origin: center;
        }

        /* Center rectangular images */
        .center-rect {
          width: 400px;
          flex: 1;
          max-width: 450px;
        }

        /* Right curved image */
        .right-curved {
          width: 250px;
          transform: perspective(600px) rotateY(-15deg);
          transform-origin: center;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.3s ease;
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        .image-wrapper:hover .gallery-image {
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        /* Stagger the animation */
        .image-wrapper:nth-child(1) .gallery-image {
          animation-delay: 0.1s;
        }
        .image-wrapper:nth-child(2) .gallery-image {
          animation-delay: 0.2s;
        }
        .image-wrapper:nth-child(3) .gallery-image {
          animation-delay: 0.3s;
        }
        .image-wrapper:nth-child(4) .gallery-image {
          animation-delay: 0.4s;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .gallery-container {
            gap: 15px;
          }

          .image-wrapper {
            height: 250px;
          }

          .left-curved,
          .right-curved {
            width: 200px;
          }

          .center-rect {
            width: 220px;
            max-width: 250px;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            flex-direction: column;
            gap: 20px;
            align-items: stretch;
          }

          .image-wrapper {
            width: 100% !important;
            max-width: 400px;
            aspect-ratio: 1 / 1;
            height: auto;
          }

          .left-curved,
          .right-curved {
            transform: none;
          }

          .center-rect {
            width: 100%;
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .gallery-container {
            gap: 15px;
          }

          .image-wrapper {
            height: 120px;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CurvedGallery;
