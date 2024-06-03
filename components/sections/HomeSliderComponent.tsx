"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";

import homeSliderImageData from "../assets/homeSliderImageData.json";
import homeSliderMobileImageData from "../assets/homeSliderMobileImageData.json";

const HomeSliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const slides = isMobile ? homeSliderMobileImageData : homeSliderImageData;
  const totalSlides = slides.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden w-full">
      {/* Slider Container */}
      <div className="container mx-auto flex items-center justify-center overflow-hidden">
        <div
          className="relative flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {/* Slider */}
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="flex justify-center items-center w-full lg:px-0 px-2">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide
                ? "bg-blue-600 border border-white"
                : "bg-white"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSliderComponent;
