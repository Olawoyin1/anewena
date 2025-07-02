// import { useState } from "react";
// import { Product } from "../Types/ProductsTypes";
// import { IoEyeOutline, IoAdd } from "react-icons/io5";
// import { motion } from "framer-motion";

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   const [hovered, setHovered] = useState(false);

//   const hoverImage = product.images[1] || product.images[0];

//   return (
//     <div
//       className="group border border-gray-100 hover:border-black bg-white relative overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="relative aspect-[4/5] h-100  w-full overflow-hidden flex items-center justify-center bg-white hover:bg-[#F4F4F4]">

//         <motion.img
//           src={mainImage}
//           alt={product.name}
//           className="w-full h-full object-contain absolute top-0 left-0"
//           initial={{ opacity: 1, scale: 1 }}
//           animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 1.05 : 1 }}
//           transition={{ duration: 0.4 }}
//         />

//         <motion.img
//           src={hoverImage}
//           alt={`${product.name} alternate`}
//           className="w-full h-full object-contain absolute top-0 left-0"
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.05 : 1 }}
//           transition={{ duration: 0.4 }}
//         />

//         <div className="absolute bottom-2 px-1 w-full grid grid-cols-2 gap-1 opacity-0 group-hover:opacity-100 transition duration-300">
//           <button className="uppercase text-xs flex items-center justify-center gap-2 bg-white font-semibold text-gray-800 px-3 py-3 hover:bg-black hover:text-white transition-all">
//             <IoEyeOutline /> <span>Quick View</span>
//           </button>
//           <button className="uppercase text-xs flex items-center justify-center gap-2 bg-white font-semibold text-gray-800 px-3 py-3 hover:bg-black hover:text-white transition-all">
//             <IoAdd /> <span>Add to Cart</span>
//           </button>
//         </div>
//       </div>

//       <div className="p-5 text-start">
//         <div className="text-[11px] font-medium uppercase tracking-[0.6875px] text-[#070707]">
//           <a href={`/brand/${product.brand.toLowerCase()}`} className="hover:opacity-80">
//             {product.brand}
//           </a>
//         </div>

//         <a href={`/shop/${product.slug}`} className="text-[#070707] hover:opacity-80">
//           <h2 className="mt-[13px] text-[14px] leading-[19px] tracking-[0.315px] capitalize font-medium">
//             {product.name}
//           </h2>
//         </a>

//         <a href={`/shop/${product.slug}`} className="text-[#454545] hover:opacity-80">
//           <p className="text-[12px] leading-5 tracking-[0.33px] mt-[13px] mb-[13px]">
//             {product.description}
//           </p>
//         </a>

//         <div className="text-[12px] leading-4 tracking-[0.12px] mt-[13px] font-normal">
//           <span className="flex gap-1 items-baseline">
//             <bdi>${product.price.toLocaleString()}</bdi>
//           </span>
//         </div>

//      </div>
//     </div>
//   );
// };

// export default ProductCard;



import { useState } from "react";
import { Product } from "../Types/ProductsTypes";
import { IoEyeOutline, IoAdd } from "react-icons/io5";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  const mainImage = product.images[0];
  const hoverImage = product.images[1] || product.images[0];

  return (
    <div
      className="group border border-gray-100 hover:border-black bg-white relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] h-100 w-full overflow-hidden flex items-center justify-center bg-white hover:bg-[#F4F4F4]">
        <motion.img
          src={mainImage}
          alt={product.name}
          className="w-full h-full object-contain absolute top-0 left-0"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />

        <motion.img
          src={hoverImage}
          alt={`${product.name} alternate`}
          className="w-full h-full object-contain absolute top-0 left-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />

        <div className="absolute bottom-2 px-1 w-full grid grid-cols-2 gap-1 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="uppercase text-xs flex items-center justify-center gap-2 bg-white font-semibold text-gray-800 px-3 py-3 hover:bg-black hover:text-white transition-all">
            <IoEyeOutline /> <span>Quick View</span>
          </button>
          <button className="uppercase text-xs flex items-center justify-center gap-2 bg-white font-semibold text-gray-800 px-3 py-3 hover:bg-black hover:text-white transition-all">
            <IoAdd /> <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="p-5 text-start">
        <div className="text-[11px] font-medium uppercase tracking-[0.6875px] text-[#070707]">
          <a href={`/brand/${product.brand.toLowerCase()}`} className="hover:opacity-80">
            {product.brand}
          </a>
        </div>

        <a href={`/shop/${product.slug}`} className="text-[#070707] hover:opacity-80">
          <h2 className="mt-[13px] text-[14px] leading-[19px] tracking-[0.315px] capitalize font-medium">
            {product.name}
          </h2>
        </a>

        <a href={`/shop/${product.slug}`} className="text-[#454545] hover:opacity-80">
          <p className="text-[12px] leading-5 tracking-[0.33px] mt-[13px] mb-[13px]">
            {product.description}
          </p>
        </a>

        <div className="text-[12px] leading-4 tracking-[0.12px] mt-[13px] font-normal">
          <span className="flex gap-1 items-baseline">
            <bdi>${product.price.toLocaleString()}</bdi>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
