/* eslint-disable react/react-in-jsx-scope */
"use client";
// import { useState } from "react";
import { DisclosureButton,DisclosurePanel,Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqData = [
  {
    question: "How does the AI skin analysis work?",
    answer:
      "Our AI uses advanced facial recognition technology to scan your selfie, analyzing key factors like hydration, texture, and fine lines. It delivers instant insights to help you understand your skin better and create a customized routine.",
  },
  {
    question: "Will the AI recommendations suit my skin type?",
    answer:
      "Absolutely! Our AI is designed to provide tailored product and routine suggestions based on your unique skin profile, ensuring compatibility with your specific skin type and needs.",
  },
  {
    question: "Can I track my skincare progress over time?",
    answer:
      "Yes! With our progress tracking feature, you’ll receive bi-weekly reports on your skin’s improvement, empowering you to stay consistent with your routine and celebrate your results.",
  },
  {
    question: "Are the reminders and routines customizable?",
    answer:
      "Yes, everything is designed to fit your lifestyle! You can create morning and evening routines, set reminders for each step, and adjust them as your skin's needs evolve.",
  },
];

export default function FAQ() {
  return (
    <div className="md:w-[861px] w-full flex flex-col gap-6 items-center md:mx-auto mx-0 ">
      <div className="flex flex-col md:w-auto w-[337px] ">
        <h2 className="md:text-[48px]  text-[24px] font-[600] text-center  mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-[#8A938F] md:text-[24px] text-center text-[14px]">
          Do you’ve a question? We’ve answers to them...
        </p>
      </div>
      <div className="space-y-4 ">
        {faqData.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border border-[#095140] rounded-[24px] shadow-sm md:w-[744px] w-[100%] md:mx-auto mx-0 ">
                <DisclosureButton className="flex justify-between w-full px-4 py-3 text-left md:text-[24px] text-[16px] font-[500]   ">
                  {faq.question}
                  <ChevronUpIcon
                    className={`w-6 h-6 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 py-2 text-[#8A938F] font-[400] md:text-[16px] text-[12px] bg-white h-[167px] ">
                  {faq.answer}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
