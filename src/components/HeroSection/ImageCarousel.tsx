"use client";
import React from "react";

const images = [
  "https://static.wixstatic.com/media/6c7230_975daac14d904d6da7e27e83ab5e6c86~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_e72fa440dc2a43669d4fc8f1169926c7~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_5b7cbd3fd67d4072bf31267418f2ba6d~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_e005cd1326ba4fe380554b046358d4f0~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_b69ca7b0e4c64b51b69fdb07bdfef457~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_844713d32ae546b59a471aa82b33c2a1~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_db8048e7b73d4dd3b03ddba9f93dab10~mv2.jpg",
  "https://static.wixstatic.com/media/6c7230_fe1e98368054462b96c95f00e5ceb0dc~mv2.jpg",
];

export default function ImageCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* First and duplicate set for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .carousel-container {
          width: 100%;
          max-width: 2000px;
          overflow: hidden;
          position: relative;
          margin: 0 auto;
        }

        .carousel-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: calc(400px * 16); /* 8 images × 2 for seamless loop */
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-item {
          flex-shrink: 0;
          width: 400px;
          height: 500px;
          position: relative;
          overflow: hidden;
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .carousel-item:hover img {
          transform: scale(1.05);
        }

        .carousel-item::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(254, 196, 71, 0.1) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .carousel-item:hover::after {
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 8));
          }
        }

        .carousel-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(254, 196, 71, 0.8);
          color: #333;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .carousel-item {
            width: 250px;
            height: 350px;
          }
          .carousel-track {
            width: calc(250px * 16);
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
