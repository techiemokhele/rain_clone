"use client";

import Image from "next/image";
import { useState } from "react";
import { RouterImageData, RouterOptionProps } from "../../types";

import {
  artCollectionRouterData,
  rainCollectionRouterData,
} from "../assets/routerOptionData";

const RouterOptionComponent = ({
  adOneImage,
  adTwoImage,
}: RouterOptionProps) => {
  const [selectArt, setSelectArt] = useState<boolean>(true);
  const [selectRain, setSelectRain] = useState<boolean>(false);
  const [selectedMainImage, setSelectedMainImage] = useState<string>(
    artCollectionRouterData[0].mainImage
  );
  const [selectedThumbnailId, setSelectedThumbnailId] = useState<number>(
    artCollectionRouterData[0].id
  );

  const selectedArt = () => {
    setSelectArt(true);
    setSelectRain(false);
    setSelectedMainImage(artCollectionRouterData[0].mainImage);
    setSelectedThumbnailId(artCollectionRouterData[0].id);
  };

  const selectedRain = () => {
    setSelectArt(false);
    setSelectRain(true);
    setSelectedMainImage(rainCollectionRouterData[0].mainImage);
    setSelectedThumbnailId(rainCollectionRouterData[0].id);
  };

  const handleThumbnailClick = (mainImage: string, id: number) => {
    setSelectedMainImage(mainImage);
    setSelectedThumbnailId(id);
  };

  const currentCollectionData: RouterImageData[] = selectArt
    ? artCollectionRouterData
    : rainCollectionRouterData;

  return (
    <section className="flex flex-col md:flex-row">
      {/* Router Selector Section */}
      <div className="flex flex-col justify-center items-center md:w-2/3 px-4 pt-8 lg:pt-5 pb-[27px] mx-2 my-2 lg:my-0 rounded-3xl">
        {adOneImage && adTwoImage && (
          <p className="text-[22px] lg:text-[32px] text-gray-600">
            the NEW <span className="font-bold">101 skins&trade;</span>{" "}
            collection is here
          </p>
        )}

        {/* Main Router Viewer */}
        <div className="my-5 flex justify-center items-center">
          <Image
            src={selectedMainImage}
            alt="Main Image"
            width={1000}
            height={1000}
            className="w-[235px] h-[230px] lg:w-[280px] lg:h-[280px] object-cover"
          />
        </div>

        {/* Router Collection Selector */}
        <div className="flex flex-row justify-center items-center space-x-6 lg:space-x-10 mb-2">
          <div
            onClick={selectedArt}
            className="flex flex-col lg:flex-row cursor-pointer"
          >
            <p
              className={`text-[16px] text-center ${
                selectArt
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              art
              <br className="lg:hidden" /> collection
            </p>
          </div>

          <div
            onClick={selectedRain}
            className="flex flex-col lg:flex-row cursor-pointer"
          >
            <p
              className={`text-[16px] text-center ${
                selectRain
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              rain
              <br className="lg:hidden" /> collection
            </p>
          </div>
        </div>

        {/* Router Thumbnail Image Selector */}
        <div className="flex flex-row space-x-5">
          {currentCollectionData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(item.mainImage, item.id)}
              className={`w-[35px] h-[35px] lg:w-[65px] lg:h-[65px] rounded-md overflow-hidden border ${
                item.id === selectedThumbnailId
                  ? "border-gray-800 border-2"
                  : ""
              }`}
            >
              <Image
                src={item.thumbnailImage}
                alt={`Thumbnail ${item.id}`}
                width={1000}
                height={1000}
                className={`w-full h-full object-cover ${
                  item.id === selectedThumbnailId ? "border-white border-2" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Router Option Image Section */}
      {adOneImage && adTwoImage && (
        <div className="w-full md:w-1/3 px-2 flex flex-col space-y-3">
          <div className="w-full h-[211px] lg:h-[250px]">
            <Image
              src={adOneImage!}
              alt="Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-[213px] lg:h-[250px]">
            <Image
              src={adTwoImage!}
              alt="Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default RouterOptionComponent;
