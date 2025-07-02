import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase as long as it's in its original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally to selected countries.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you will receive a tracking number once your order ships.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto border border-gray-200 divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-5 py-4 font-semibold text-gray-800 bg-white flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{ opacity: 1, maxHeight: 200 }}
                exit={{ opacity: 0, maxHeight: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-5 pb-4 text-gray-600 bg-gray-50"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
