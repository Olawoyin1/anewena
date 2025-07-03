import { useEffect, useRef, useState } from "react";
import { Product } from "../Types/ProductsTypes";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (product) {
      setCurrentIndex(0);
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white/90 bg-opacity-40 backdrop-blur-[2px] z-50 flex items-center justify-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            ref={modalRef}
            className="bg-white overflow-hidden shadow-lg p-8 border border-gray-500 w-full max-w-4xl h-[440px] flex flex-col md:flex-row items-center relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl z-10"
            >
              <IoClose />
            </button>

            {/* Image Slider Section (hover-sensitive) */}
            <div className="relative w-full md:w-1/2 h-80 md:h-full flex items-center justify-center group/image">
              <img
                src={product.images[currentIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />

              {/* Slide Buttons - only visible when hovering over image container */}
              <button
                onClick={prevSlide}
                className="absolute bg-white border border-gray-400  left-2 top-1/2 transform -translate-y-1/2 hover:bg-black cursor-pointer hover:text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition"
              >
                <IoChevronBack />
              </button>
              <button
                onClick={nextSlide}
                className="absolute bg-white border border-gray-400 right-2 top-1/2 transform -translate-y-1/2 hover:bg-black cursor-pointer hover:text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition"
              >
                <IoChevronForward />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col gap-4 w-full md:w-1/2 overflow-y-auto">
              <h1 className="text-[23px] leading-[27.14px] font-medium tracking-[0.115px] capitalize">
                {product.name}
              </h1>

              <p className="text-black font-medium text-lg">
                ${product.price.toLocaleString()}
              </p>

              <p className="text-gray-600 text-sm">{product.description}</p>

              <div className="hidden sm:flex items-center gap-2 mt-4">
                <div className="flex items-center border border-gray-700 gap-4 text-lg font-medium">
                  <button onClick={decrease} className="px-3 py-3">
                    <HiOutlineMinus />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={increase} className="px-3 py-3">
                    <GoPlus />
                  </button>
                </div>
                <button className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 w-full sm:w-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
