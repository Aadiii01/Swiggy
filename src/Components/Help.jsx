import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { faq } from "../Utils/faqdata";

export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {faq.map((e, index) => (
        <div
          key={index}
          className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            onClick={() => toggleAccordion(index)}
          >
            <span className="flex font-newm text-lg font-medium text-black">
              {e.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500 font-newr">{e.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const Help = () => {
  console.log(faq);
  return (
    <section className="mx-auto  mt-[90px] max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-new font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Project Related Questions
          </h2>
          <p className="mt-[30px] font-newr max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            I answer all the basic Question of of this Project
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <Accordian />
        </div>
      </div>
    </section>
  );
};
export default Help;
