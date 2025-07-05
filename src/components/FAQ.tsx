import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";

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

  const handleFaqToggle = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (

    <>
    <Navbar />

    <h3 className="text-center p-4 border-b border-gray-200" >FAQ</h3>
    <motion.div
      className="max-w-6xl mx-auto  border border-gray-200 px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
      

      <div className=" w-[620px] max-w-full mx-auto">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            className="bg-white  rounded-md  p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: faq.id * 0.05 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-start gap-3">
                <p className="font-semibold text-gray-800">{faq.question}</p>
              </div>
              <motion.button
                onClick={() => handleFaqToggle(faq.id)}
                whileTap={{ scale: 0.9 }}
                className="text-2xl font-bold text-gray-600 focus:outline-none"
              >
                {openFAQ === faq.id ? "−" : "+"}
              </motion.button>
            </div>

            <AnimatePresence initial={false}>
              {openFAQ === faq.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-3 overflow-hidden text-sm text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
    <Footer />
            </>
  );
};

export default FAQ;
