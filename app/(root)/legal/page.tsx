"use client";

import { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import CustomButtonComponent from "@/components/common/CustomButtonComponent";

const LegalPage = () => {
  const [selectedButton, setSelectedButton] = useState("terms and conditions");
  const [pdfUrl, setPdfUrl] = useState("/documents/Neo_Mokhele_Resume.pdf");

  const handleButtonChange = (buttonText: string, pdfUrl: string) => {
    setSelectedButton(buttonText);
    setPdfUrl(pdfUrl);
  };

  const buttons = [
    { text: "terms and conditions", pdf: pdfUrl },
    { text: "website online", pdf: pdfUrl },
    { text: "privacy policy", pdf: pdfUrl },
    { text: "ispa", pdf: pdfUrl },
    { text: "paia", pdf: pdfUrl },
    { text: "data privacy", pdf: pdfUrl },
    { text: "competition", pdf: pdfUrl },
    { text: "promo", pdf: pdfUrl },
  ];

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="container mx-auto flex flex-col mt-20">
      <p className="text-blue-600 text-[26px] font-bold px-4">legal</p>
      <div className="border-b-[1px] border-gray-200 mt-6 mb-6"></div>

      {/* Buttons Section */}
      <div className="w-full flex justify-center mb-16">
        <div className="flex flex-col lg:flex-row w-full lg:w-auto mx-40 justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
          {buttons.map(({ text, pdf }) => (
            <CustomButtonComponent
              key={text}
              text={text}
              onClick={() => handleButtonChange(text, pdf)}
              type="button"
              hover={false}
              normal={selectedButton === text}
              outline={selectedButton !== text}
            />
          ))}
        </div>
      </div>

      {/* PDF Viewer Section */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="w-full h-full flex justify-center mb-16 -z-50">
          <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </div>
  );
};

export default LegalPage;
