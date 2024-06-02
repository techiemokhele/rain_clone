"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import homeSliderImageData from "../assets/homeSliderImageData.json";

const HomeSliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = homeSliderImageData.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden w-full mb-16">
      {/* Slider Container */}
      <div className="container mx-auto flex items-center justify-center overflow-hidden">
        <div
          className="relative flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {homeSliderImageData.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="flex justify-center items-center w-full h-auto lg:px-0 px-3">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  width={500}
                  height={500}
                  className="w-full h-full max-w-[1000px] max-h-[500px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {homeSliderImageData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSliderComponent;
