/* eslint-disable react/react-in-jsx-scope */
"use client";
// import { useState } from "react";
import { DisclosureButton,DisclosurePanel,Disclosure } from "@headlessui/react";
import {  MinusCircleIcon,PlusCircleIcon } from "@heroicons/react/20/solid";

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
      <div className="space-y-4 w-full">
        {faqData.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border border-[#9FC3CE] rounded-[24px] shadow-sm md:w-[744px] w-[100%] md:mx-auto mx-0 overflow-hidden">
                <DisclosureButton className="flex justify-between md:items-center items-start w-full p-4  text-left md:text-[24px] text-[16px] font-[500]   ">
                  {faq.question}

                  <div
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    {" "}
                    {/* Icon Rotation */}
                    {open ? (
                      <MinusCircleIcon
                        className={`md:w-[48px] w-[24px] md:h-[48px] h-[24px] fill-primary`}
                      />
                    ) : (
                      <PlusCircleIcon
                        className={`md:w-[48px] w-[24px] md:h-[48px] h-[24px] fill-primary`}
                      />
                    )}
                  </div>
                </DisclosureButton>
                <DisclosurePanel  className="p-6 text-[#8A938F] font-[400] md:text-[16px] text-[12px] bg-white transition-all duration-300 ease-in-out overflow-hidden ">
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
