import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg flex justify-between">
          {question}
          <span>{isOpen ? "-" : "+"}</span>
        </h3>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="py-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What is scan Menu?",
      answer: "Scan menu is a restaurant management system for restaurant .",
    },
    {
      question: "What is the use of scan menu?",
      answer:
        "loreamfk daskfm lnakfs lkdsaf isalkfn oaklsnfd ioadshnfoi aejwiotjf adsfnioasf .",
    },
    {
      question: "Tell me more about scan menu?",
      answer:
        "scan menu is ksnktneas kj cahuknf djksha icnijdasnd fjieran fcuinsdeiuah fiucaehwnc uianeiuf niuewn i.",
    },
  ];

  return (
    <div className="px-6 sm:px-32 sm:pt-16 mx-auto">
      <h1 className="text-3xl text-gray-700 font-poppins sm:text-4xl font-bold py-8 text-center">
        Frequently Asked Questions
      </h1>
      <div>
        <div className="bg-[#f1f1f1] p-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
