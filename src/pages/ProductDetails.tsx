import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../Data/Products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { useCartStore } from "../utils/cartStore";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const addToCart = useCartStore((state) => state.addToCart);
  const toggleCart = useCartStore((state) => state.toggleCart);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) return <div className="p-10">Product not found.</div>;

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const handleAdd = () => {
    if (!selectedColor) {
      toast("Please select your preferred color.", {
        classNames: {
          toast: "text-center",
        },
      });
      return;
    }

    if (!selectedSize) {
      toast("Please select your preferred size.");
      return;
    }

    const cartItem = {
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    };

    addToCart(cartItem);
    toggleCart();
    toast.success("Item added to cart!");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-1 items-center md:gap-10">
        {/* Left: Image section */}
        <div className="flex flex-col h-[500px] items-center">
          {/* Main Image with Fade Effect */}
          <div className="w-full aspect-square bg-white rounded-lg overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 overflow-hidden border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div className="flex flex-col justify-start gap-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
            <span>/</span>
            <Link
              to={`/shop?category=${product.brand}`}
              className="hover:underline capitalize"
            >
              {product.brand}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>

          {/* Title */}
          <h1 className="text-[30px] font-medium leading-[36.9px] tracking-[0.15px] capitalize mt-5 m-0 p-0 antialiased">
            {product.name}
          </h1>

          {/* Price & Discount */}
          <bdi className="antialiased font-semibold">
            <span className="antialiased">$</span>
            {product.price.toLocaleString()}
          </bdi>

          {/* Description */}
          <p className="text-gray-600 leading-6 max-w-lg text-sm mt-2">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mt-6">
            <p className="uppercase antialiased font-bold text-sm mb-3">
              Color
            </p>
            <div className="flex gap-2">
              {["beige", "black", "white"].map((color) => {
                const isAvailable = product.availableColors?.includes(color);
                const isSelected = selectedColor === color;

                const colorClasses: Record<string, string> = {
                  beige: "bg-[#C9B89A]", // Darker beige
                  black: "bg-black",
                  white: "bg-white border",
                };

                return (
                  <button
                    key={color}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() => isAvailable && setSelectedColor(color)}
                    className={`
            relative transition-all duration-200 ease-in-out
            rounded-full  flex items-center justify-center
            ${isSelected ? "w-7 h-7" : "w-6 h-6"}
            ${colorClasses[color]}
            ${!isAvailable ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
          `}
                  >
                    {isSelected && (
                      <span
                        className={`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${
                          color === "white" ? "text-black" : "text-white"
                        }`}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <p className="uppercase antialiased  font-bold text-sm mb-3">
              Size
            </p>
            <div className="flex gap-3">
              {["Large", "Medium", "Small"].map((size) => {
                const isAvailable = product.availableSizes?.includes(size);
                return (
                  <button
                    key={size}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size)}
                    className={`border-1 border-gray-400 px-4 py-2 text-sm  
            ${
              selectedSize === size
                ? "border ring-1 border-gray-900"
                : "bg-white text-black"
            }
            ${
              isAvailable
                ? "hover:border-black hover:"
                : "opacity-40 cursor-not-allowed"
            }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity Selector */}
          {/* Quantity Selector for Desktop */}
          <div className="hidden sm:flex items-center gap-2 mt-4">
            <div className="flex items-center border border-gray-700 gap-4 text-lg font-medium">
              <button
                onClick={decrease}
                className="px-3 cursor-pointer hover:text-[#C69657] py-3"
              >
                <HiOutlineMinus />
              </button>
              <span>{quantity}</span>
              <button
                onClick={increase}
                className="px-3 cursor-pointer hover:text-[#C69657] py-3"
              >
                <GoPlus />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="bg-black uppercase text-white px-14 font-semibold cursor-pointer py-3 text-sm hover:bg-[#C69657] w-full sm:w-auto"
            >
              Add to Cart
            </button>
          </div>

          {/* Metadata */}
          <div className="mt-6 text-sm text-gray-600 leading-6 space-y-1">
            <p>
              <span className="font-semibold text-black">SKU:</span>{" "}
              132354563213
            </p>
            {/* <p><span className="font-semibold text-black">Category:</span> {product.category}</p> */}
            <p>
              <span className="font-semibold text-black">Tags:</span> sofa, wood
            </p>
            <p>
              <span className="font-semibold text-black">Brand:</span>{" "}
              {product.brand}
            </p>
          </div>
        </div>
      </div>

      {/* Fixed bottom quantity selector for mobile */}
      <div className="fixed bottom-0 left-0 w-full sm:hidden bg-white border-t z-30">
        <div className="flex items-center  px-4 py-3 gap-2">
          <div className="flex items-center border border-gray-700 gap-4 text-xs md:text-lg font-medium">
            <button onClick={decrease} className="px-3 py-3">
              <HiOutlineMinus />
            </button>
            <span className="text-lg">{quantity}</span>
            <button onClick={increase} className="px-3 py-3">
              <GoPlus />
            </button>
          </div>
          <button onClick={handleAdd} className="bg-black w-full uppercase col-span-2 text-white px-6 py-3 text-xs md:text-sm hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
