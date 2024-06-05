"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

import { FAQ } from "../../types";
import companyFaqData from "../assets/companyFaqData.json";
import productFaqData from "../assets/productFaqData.json";

const FAQComponent = () => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(
    null
  );
  const [expandedProductId, setExpandedProductId] = useState<number | null>(
    null
  );

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestionId(
      questionId === expandedQuestionId ? null : questionId
    );
  };

  const toggleProductQuestion = (productQuestionId: number) => {
    setExpandedProductId(
      productQuestionId === expandedProductId ? null : productQuestionId
    );
  };

  return (
    <div className="container mx-auto flex flex-col px-6">
      <h1 className="text-blue-600 text-[24px] font-bold">
        looking for a little more info?
      </h1>

      {/* FAQ section */}
      <div className="w-full flex flex-col lg:flex-row justify-between mt-16 lg:space-x-36 lg:px-14">
        {/* Business Question */}
        <div className="w-full lg:w-1/2 flex flex-col mb-[20px] lg:mb-0">
          {companyFaqData.map((faq: FAQ) => (
            <div key={faq.id} className="mb-3">
              <div
                onClick={() => toggleQuestion(faq.id)}
                className="flex flex-row justify-between items-center cursor-pointer"
              >
                <p className="text-blue-600 hover:text-blue-800 text-[14px] font-medium">
                  {faq.question}
                </p>

                {expandedQuestionId === faq.id ? (
                  <FaMinus className="text-blue-600 mr-2 size-[14px]" />
                ) : (
                  <FaPlus className="text-blue-600 mr-2 size-[14px]" />
                )}
              </div>
              <div className="border-[1px] border-gray-100 mt-3"></div>

              {expandedQuestionId === faq.id && (
                <ul className="py-5">
                  {faq.answers.map((answer, index) => (
                    <li key={index}>
                      {typeof answer === "string" ? (
                        answer
                      ) : (
                        <>
                          <h4 className="text-blue-600 text-[15px] font-bold mb-4">
                            {answer.nested_question}
                          </h4>

                          {answer.nested_info && (
                            <p className="text-gray-400 text-[14px] pb-2">
                              {answer.nested_info}
                            </p>
                          )}

                          <ul className="list-disc px-5 pb-1">
                            {answer.nested_answers.map(
                              (nestedAnswer, nestedIndex) => (
                                <li
                                  key={nestedIndex}
                                  className="text-gray-400 text-[14px] pb-2"
                                >
                                  {nestedAnswer}
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Product Question */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {productFaqData.map((faq: FAQ) => (
            <div key={faq.id} className="mb-3">
              <div
                onClick={() => toggleProductQuestion(faq.id)}
                className="flex flex-row justify-between items-center cursor-pointer"
              >
                <p className="text-blue-600 hover:text-blue-800 text-[14px] font-medium">
                  {faq.question}
                </p>

                {expandedProductId === faq.id ? (
                  <FaMinus className="text-blue-600 mr-2 size-[14px]" />
                ) : (
                  <FaPlus className="text-blue-600 mr-2 size-[14px]" />
                )}
              </div>
              <div className="border-[1px] border-gray-100 mt-3"></div>

              {expandedProductId === faq.id && (
                <ul className="py-5">
                  {faq.answers.map((answer, index) => (
                    <li key={index}>
                      {typeof answer === "string" ? (
                        answer
                      ) : (
                        <>
                          <h4
                            className={`text-blue-600 text-[15px] font-bold ${
                              answer.nested_question === "" ? "mb-0" : "mb-4"
                            }`}
                          >
                            {answer.nested_question}
                          </h4>

                          {answer.nested_info && (
                            <p className="text-gray-400 text-[14px] pb-2">
                              {answer.nested_info}
                            </p>
                          )}

                          <ul className="list-disc px-5 pb-1">
                            {answer.nested_answers.map(
                              (nestedAnswer, nestedIndex) => (
                                <li
                                  key={nestedIndex}
                                  className="text-gray-400 text-[14px] pb-2"
                                >
                                  {nestedAnswer}
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
