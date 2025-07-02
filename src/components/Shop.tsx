import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../Data/Products";
import { TbCircuitSwitchOpen } from "react-icons/tb";
import FilterSidebar from "../components/FilterSidebar";

const PER_PAGE = 9;

const CustomProductGrid = () => {
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const totalPages = Math.ceil(products.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const paginatedProducts = products.slice(start, start + PER_PAGE);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`sticky top-14 z-50 px-4 py-3 flex justify-end transition-all duration-300 ${
          isSticky ? "border-gray-200" : "bg-none"
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

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

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

      <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
    </>
  );
};

export default CustomProductGrid;
