import { useEffect, useState } from "react";
import { IoEyeOutline, IoAdd, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { TbCircuitSwitchOpen } from "react-icons/tb";

const allProducts = Array.from({ length: 19 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  detail:
    "Ajui Sofa is inspired by the iconic Memphis style. The sofa combines an artsy interpretation of a cactus shape and is upholstered in velvet.",
  price: `$${(19.99 + i * 5).toFixed(2)}`,
  image1: `https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&h=600&fit=crop&sig=${i}`,
  image2: `https://images.pexels.com/photos/6311395/pexels-photo-6311395.jpeg?auto=compress&cs=tinysrgb&h=600&fit=crop&sig=${i + 100}`,
}));

const PER_PAGE = 12;

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group border border-gray-100 hover:border-black bg-white relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* Base Image */}
        <motion.img
          src={product.image1}
          alt={product.name}
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: hovered ? 0 : 1,
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Hover Image */}
        <motion.img
          src={product.image2}
          alt={product.name}
          className="w-full h-full object-cover absolute top-0 left-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Buttons on Hover */}
        <div className="absolute bottom-2 px-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-1 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="uppercase text-xs flex items-center justify-center gap-2 bg-white font-semibold  text-gray-800 border-0 px-3 py-2 hover:bg-black cursor-pointer hover:text-white transition-all">
            <IoEyeOutline /> <span>Quick View</span>
          </button>
          <button className="uppercase text-xs flex items-center font-semibold justify-center gap-2 bg-white cursor-pointer hover:bg-black  border-0 hover:text-white px-3 py-2 transition-colors">
            <IoAdd /> <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
        <p className="text-xs text-gray-600">{product.detail}</p>
        <p className="mt-1 text-sm font-bold text-gray-600">{product.price}</p>
      </div>
    </div>
  );
};


const FilterSection = ({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="border-b border-gray-300 py-2">
    <button
      className="w-full flex justify-between items-center text-xs font-bold"
      onClick={onToggle}
    >
      {label}
      <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && <div className="mt-2">{children}</div>}
    </motion.div>
  </div>
);

const FilterSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg overflow-y-auto"
        >
          <div className="flex justify-end items-center px-4 py-4">
            {/* <h2 className="text-lg font-semibold">Filters</h2> */}
            <button onClick={onClose}>
              <IoClose size={22} />
            </button>
          </div>

          <div className="p-4 space-y-">
            <FilterSection
              label="CATEGORY"
              isOpen={openDropdown === "category"}
              onToggle={() => toggleDropdown("category")}
            >
              {["Chair", "Table", "Lamp", "Sofa", "Stool"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </FilterSection>

            <FilterSection
              label="PRICE"
              isOpen={openDropdown === "price"}
              onToggle={() => toggleDropdown("price")}
            >
              <input type="range" min={10} max={200} className="w-full" />
              <p className="text-xs mt-1 text-gray-600">Up to $200</p>
            </FilterSection>

            <FilterSection
              label="COLOR"
              isOpen={openDropdown === "color"}
              onToggle={() => toggleDropdown("color")}
            >
              <div className="flex flex-col gap-3">
                {["beige", "black", "white"].map((color) => (
                  <div key={color} className="flex text-xs items-center gap-1  capitalize">
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color }}
                    />
                    {color}
                  </div>
                ))}
              </div>
            </FilterSection>

            <FilterSection
              label="TEXTTILE"
              isOpen={openDropdown === "textile"}
              onToggle={() => toggleDropdown("textile")}
            >
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Cotton
              </label>
            </FilterSection>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

const CustomProductGrid = () => {
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const totalPages = Math.ceil(allProducts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const products = allProducts.slice(start, end);

  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 10); // becomes sticky after 10px scroll
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 return (
  <>
    {/* Sticky Filter Button */}
    <div
        className={`sticky top-14 z-50 px-4 py-3 flex justify-end transition-all duration-300 ${
            isSticky
            ? " border-gray-200 "
            : "bg-none"
        }`}
        >
        <button
            onClick={() => setFilterOpen(true)}
            className="bg-black text-white inline-flex gap-2 text-xs px-4 py-2 items-center hover:bg-gray-800"
        >
            <TbCircuitSwitchOpen size={20} />
            <span>FILTER</span>
        </button>
    </div>


    {/* Product Grid Section */}
    <section className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 mx-1 text-sm border rounded ${
              page === i + 1
                ? "bg-black text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>

    {/* Filter Sidebar */}
    <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
  </>
);

};

export default CustomProductGrid;
