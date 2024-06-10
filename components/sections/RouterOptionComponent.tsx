"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { RouterImageData, RouterOptionProps } from "../../types";
import AboutRouterArtComponent from "./AboutRouterArtComponent";

const RouterOptionComponent = ({
  adOneImage,
  adTwoImage,
  stepData = [],
  sellingRouter,
}: RouterOptionProps) => {
  // Validate and initialize art and rain data
  const artData: RouterImageData[] = stepData[0] ?? [];
  const rainData: RouterImageData[] = stepData[1] ?? [];

  // State for selected collection and images
  const [selectArt, setSelectArt] = useState<boolean>(true);
  const [selectedMainImage, setSelectedMainImage] = useState<string>(
    artData[0]?.mainImage || ""
  );
  const [selectedThumbnailId, setSelectedThumbnailId] = useState<number>(
    artData[0]?.id || 0
  );
  const [selectedArtAuthor, setSelectedArtAuthor] = useState<string>(
    artData[0]?.artAuthor || ""
  );
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<RouterImageData>({
    id: 0,
    mainImage: "",
    thumbnailImage: "",
    artImage: "",
    artAuthor: "",
    artDescription: "",
    artMoreInfo: "",
  });

  // Update selected images when collection changes
  useEffect(() => {
    if (selectArt) {
      setSelectedMainImage(artData[0]?.mainImage || "");
      setSelectedThumbnailId(artData[0]?.id || 0);
      setSelectedArtAuthor(artData[0]?.artAuthor || "");
    } else {
      setSelectedMainImage(rainData[0]?.mainImage || "");
      setSelectedThumbnailId(rainData[0]?.id || 0);
      setSelectedArtAuthor(rainData[0]?.artAuthor || "");
    }
  }, [selectArt, artData, rainData]);

  // Handlers for selecting the collection
  const selectedArt = () => setSelectArt(true);
  const selectedRain = () => setSelectArt(false);

  // Handler for clicking a thumbnail image
  const handleThumbnailClick = (mainImage: string, id: number) => {
    const selectedItem = currentCollectionData.find((item) => item.id === id);

    if (selectedItem) {
      setSelectedMainImage(mainImage);
      setSelectedThumbnailId(id);
      setSelectedArtAuthor(selectedItem.artAuthor ?? "");
    }
  };

  // Function to handle click on art author
  const handleAuthorClick = () => {
    const selectedItem = currentCollectionData.find(
      (item) => item.id === selectedThumbnailId
    );
    if (selectedItem) {
      setModalData(selectedItem);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Determine the current collection data based on the selection
  const currentCollectionData: RouterImageData[] = selectArt
    ? artData
    : rainData;

  return (
    <section className="flex flex-col md:flex-row">
      {/* Router options */}
      <div
        className={`flex flex-col justify-center items-center ${
          sellingRouter
            ? "w-full mx-0 my-0 px-0 pt-0 pb-0 "
            : "md:w-2/3 px-4 pt-8 lg:pt-5 pb-[27px] mx-2 my-2 lg:my-0 rounded-3xl"
        }`}
      >
        {adOneImage && adTwoImage && (
          <p className="text-[22px] lg:text-[32px] text-gray-600">
            the NEW <span className="font-bold">101 skins&trade;</span>{" "}
            collection is here
          </p>
        )}

        {/* Router Previewer Image */}
        <div
          className={`${
            sellingRouter ? "mb-7" : "my-5 flex justify-center items-center"
          }`}
        >
          <Image
            src={selectedMainImage}
            alt="Main Image"
            width={1000}
            height={1000}
            className={`${
              sellingRouter
                ? "w-[330px] lg:w-[370px]"
                : "w-[235px] h-[230px] lg:w-[280px] lg:h-[280px] object-cover"
            }`}
          />
        </div>

        {/* Modal Trigger */}
        {sellingRouter && (
          <p
            className="text-[16px] lg:text-[16px] text-blue-600 font-normal underline mb-7 cursor-pointer"
            onClick={() => {
              currentCollectionData === artData ? handleAuthorClick() : null;
            }}
          >
            {selectedArtAuthor}
          </p>
        )}

        {/* Author Info Modal */}
        {showModal && (
          <div className="fixed inset-0 z-40 flex justify-center items-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <AboutRouterArtComponent
              id={modalData.id}
              mainImage={modalData.mainImage}
              thumbnailImage={modalData.thumbnailImage}
              artImage={modalData.artImage}
              artAuthor={modalData.artAuthor}
              artDescription={modalData.artDescription}
              artMoreInfo={modalData.artMoreInfo}
              onClose={handleCloseModal}
            />
          </div>
        )}

        {/* Router Options Selector */}
        <div
          className={`flex flex-row w-full ${
            sellingRouter
              ? "justify-between items-center space-x-16"
              : "justify-center items-center space-x-6 lg:space-x-10 mb-2"
          }`}
        >
          {/* Art Router Collection */}
          <div
            onClick={selectedArt}
            className={`flex flex-col lg:flex-row cursor-pointer ${
              sellingRouter ? "w-1/2 justify-center items-center" : ""
            }`}
          >
            <p
              className={`text-[16px] text-center ${
                selectArt
                  ? `text-blue-600 font-semibold border-b-2 border-blue-600 ${
                      sellingRouter ? "pb-4 w-full" : ""
                    }`
                  : sellingRouter
                  ? "text-gray-600 pb-4"
                  : "text-gray-600"
              }`}
            >
              art
              {sellingRouter ? null : <br className="lg:hidden" />} collection
            </p>
          </div>

          {/* Rain Router Collection */}
          <div
            onClick={selectedRain}
            className={`flex flex-col lg:flex-row cursor-pointer ${
              sellingRouter ? "w-1/2 justify-center items-center" : ""
            }`}
          >
            <p
              className={`text-[16px] text-center ${
                !selectArt
                  ? `text-blue-600 font-semibold border-b-2 border-blue-600 ${
                      sellingRouter ? "pb-4 w-full" : ""
                    }`
                  : sellingRouter
                  ? "text-gray-600 pb-4"
                  : "text-gray-600"
              }`}
            >
              rain
              {sellingRouter ? null : <br className="lg:hidden" />} collection
            </p>
          </div>
        </div>

        {/* Option Thumbnail Images */}
        <div
          className={`flex flex-row ${
            sellingRouter ? "my-6 space-x-3 justify-center" : "space-x-5"
          }`}
        >
          {currentCollectionData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleThumbnailClick(item.mainImage, item.id)}
              className={`overflow-hidden border ${
                item.id === selectedThumbnailId
                  ? sellingRouter
                    ? "w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] border-gray-800 border-2 rounded-full hover:scale-110 transition-transform duration-300 transform"
                    : "w-[35px] h-[35px] lg:w-[65px] lg:h-[65px] border-gray-800 border-2 rounded-md"
                  : sellingRouter
                  ? "w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] rounded-full hover:scale-110 transition-transform duration-300 transform"
                  : "w-[35px] h-[35px] lg:w-[65px] lg:h-[65px] rounded-md"
              }`}
            >
              <Image
                src={item.thumbnailImage}
                alt={`Thumbnail ${item.id}`}
                width={1000}
                height={1000}
                className={`w-full h-full object-cover  ${
                  item.id === selectedThumbnailId ? "border-white border-2" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Ad Images */}
      {adOneImage && adTwoImage && (
        <div className="w-full md:w-1/3 px-2 flex flex-col space-y-3">
          <div className="w-full h-[211px] lg:h-[250px]">
            <Image
              src={adOneImage}
              alt="Ad Image 1"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-[213px] lg:h-[250px]">
            <Image
              src={adTwoImage}
              alt="Ad Image 2"
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
