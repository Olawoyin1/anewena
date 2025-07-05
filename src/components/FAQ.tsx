import { useState } from "react";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";
import Navbar from "./Navbar";
import Footer from "./Footer";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused and in their original packaging.",
  },
  {
    id: 2,
    question: "Do you offer free shipping?",
    answer:
      "Yes, we offer free shipping on all orders over $50 within the continental U.S.",
  },
  {
    id: 3,
    question: "How long does delivery take?",
    answer:
      "Standard shipping takes 3–5 business days. Express options are available at checkout.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States. International shipping is coming soon!",
  },
  {
    id: 5,
    question: "Can I track my order?",
    answer:
      "Yes! Once your order ships, you’ll receive a tracking number via email or SMS.",
  },
  {
    id: 6,
    question: "What payment methods are accepted?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay.",
  },
  {
    id: 7,
    question: "Is there a warranty on your products?",
    answer:
      "Yes, all products come with a 1-year warranty against manufacturing defects.",
  },
  {
    id: 8,
    question: "How do I contact customer support?",
    answer:
      "You can reach us via our Contact page or email support@yourstore.com. We're available 24/7.",
  },
];
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <h3 className="font-bold text-[24px] leading-[33px] tracking-[-0.36px] uppercase text-center p-4 border-b border-gray-200">FAQ</h3>

      <motion.div
        className="max-w-6xl mx-auto border border-gray-200 px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-[620px] max-w-full mx-auto">
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            return (
              <div key={faq.id} className="border-b border-gray-200 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <p className="relative block hover:text-[#C69657] pr-[30px] pt-[15px] pb-[17px] font-medium text-[17px] leading-[24px] tracking-[-0.1275px] transition-all duration-150 ease-linear">
                    {faq.question}
                  </p>

                  {/* Toggle Button with Rotating Icon */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={`text-lg font-light cursor-pointer hover:text-[#C69657] transition-transform duration-300 ease-in-out focus:outline-none ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-label="Toggle Answer"
                  >
                    <GoPlus />
                  </button>
                </div>

                {/* Collapsible Answer */}
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out text-sm text-gray-600 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 py-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default FAQ;
