import React, { useState } from 'react';
import Card1 from "./MyOpinion"
import Myvid from "./Myvideos"
import MyMost from "./MyMostViewed"
import MyAnno from "./MyAnnouncement"

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Opinion',
      answer: <Card1 src1 = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg" src2= "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Card1>,
    },
    {
      question: 'Videos',
      answer: <Myvid></Myvid>,
    },
    {
      question: 'Most Viewed',
      answer: <MyMost></MyMost>,
    },
    {
      question: 'New Announcements',
      answer: <MyAnno></MyAnno>,
    },
  ];

  return (
    <div className="container mx-auto py-8 ">
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-md"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-2xl font-medium">{faq.question}</h3>
              <svg
                className={`h-5 w-5 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;