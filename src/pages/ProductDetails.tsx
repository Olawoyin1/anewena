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

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
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
  if (!product) return;
  const cartItem = { ...product, quantity }; // now it's a CartItem
  addToCart(cartItem);
  toggleCart();
};



  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-10">
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
          <h1 className="text-[30px] font-medium leading-[36.9px] tracking-[0.15px] capitalize mt-5 m-0 p-0 antialiased">{product.name}</h1>

          {/* Price & Discount */}
          <bdi className="antialiased font-semibold">
            <span className="antialiased">$</span>{product.price.toLocaleString()}
          </bdi>


          {/* Description */}
          <p className="text-gray-600 leading-6 max-w-lg text-sm mt-2">
            {product.description}
          </p>

          {/* Quantity Selector */}
          {/* Quantity Selector for Desktop */}
          <div className="hidden sm:flex items-center gap-2 mt-4">
            <div className="flex items-center border border-gray-700 gap-4 text-lg font-medium">
              <button onClick={decrease} className="px-3 cursor-pointer hover:text-[#C69657] py-3">
                <HiOutlineMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={increase} className="px-3 cursor-pointer hover:text-[#C69657] py-3">
                <GoPlus />
              </button>
            </div>
            <button onClick={handleAdd} className="bg-black uppercase text-white px-14 font-semibold cursor-pointer py-3 text-sm hover:bg-[#C69657] w-full sm:w-auto">
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
      <div className="fixed bottom-0 left-0 w-full sm:hidden bg-white border-t z-50">
        <div className="flex items-center  px-4 py-3 gap-2">
          <div className="flex items-center border border-gray-700 gap-4 text-lg font-medium">
            <button onClick={decrease} className="px-3 py-3">
              <HiOutlineMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={increase} className="px-3 py-3">
              <GoPlus />
            </button>
          </div>
          <button className="bg-black w-full uppercase col-span-2 text-white px-6 py-3 text-sm hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
