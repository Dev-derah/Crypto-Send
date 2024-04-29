import React, { useState } from 'react'
import {arrowdown} from "../../assets"

type Props = {}

const FAQ = (props: Props) => {
    const faqData = [
      {
        question: "What is Qoinpal?",
        answer:
          "QoinPal is a borderless fiat-to-crypto and crypto-to-fiat payment solution.",
      },
      {
        question: "How does Qoinpal work?",
        answer:
          "Qoinpal acts as a bridge; you send money from a your local bank account and the recipient receives it as crypto and vice versa with crypto-to-fiat payments. And no, you don’t need a wallet. ",
      },
      {
        question: "No wallet? How do I transact in crypto?",
        answer:
          "We act as the gateway, accepting fiat and sending it as crypto to the recipient.",
      },
      {
        question: "Is there an invoice system in place?",
        answer:
          "With QoinPal, you may bill clients in any currency and receive it either by fiat or in crypto.",
      },
    ];
    const [answersVisible, setAnswersVisible] = useState(
      new Array(faqData.length).fill(false)
    );

    // Step 3: Function to toggle answer visibility
    const toggleAnswer = (index: number) => {
      const newAnswersVisible = [...answersVisible];
      newAnswersVisible[index] = !newAnswersVisible[index];
      setAnswersVisible(newAnswersVisible);
    };

  return (
    <div className="" id="faqs">
      <h1 className="flex items-center justify-center font-bold text-lg text-[#111111] my-section-padding">
        FAQs
      </h1>
      <div className="flex items-center justify-center flex-col py-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center border rounded-2xl border-[#BFBFBF] w-[90%] md:w-[80%] mb-6 px-4 py-4"
          >
            <div
              className="flex items-center justify-between"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              <h4 className="font-normal">{item.question}</h4>
              <img
                src={arrowdown}
                alt=""
                style={{
                  transform: answersVisible[index]
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </div>
            {answersVisible[index] && (
              <div className="my-4 font-light">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;