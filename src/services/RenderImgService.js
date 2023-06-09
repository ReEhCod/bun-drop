import React, { useState, useEffect } from "react";

export class RenderImgManager {
  static Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const images = [
      {
        url: `Loop-bild.jpg`,
        title: `BunDSelection`,
        text: "Bun Beef Premium",
      },
      {
        url: `Desserter.jpg`,
        text: `Coola och svala nyheter`,
      },
      {
        url: `farm1.jpg`,
        text: `Du köper Lokalt, Kvalité och Miljövänligt`,
      },
      {
        url: `Drone.jpg`,
        text: `Your food delivered from the sky`,
      },
    ];

    useEffect(() => {
      let intervalId;

      if (isRunning) {
        intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
          clearInterval(intervalId);
        };
      }
    }, [isRunning, images]);

    const previousImage = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleToggle = () => {
      setIsRunning((prevState) => !prevState);
    };

    return {
      currentIndex,
      isRunning,
      images,
      previousImage,
      nextImage,
      handleToggle,
    };
  };
}
