import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../Data/Products";
import { TbCircuitSwitchOpen } from "react-icons/tb";
import FilterSidebar from "../components/FilterSidebar";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const PER_PAGE = 12;

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

        {/* Custom Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {/* Prev button if not on first page */}
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="w-13 h-13 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#C69657] hover:text-white cursor-pointer hover:border-0 transition"
            >
              <IoIosArrowBack size={22} />
            </button>
          )}

          {/* Page buttons (always showing 1 and 2 for now) */}
          {[1, 2].map((pg) =>
            pg <= totalPages ? (
              <button
                key={pg}
                onClick={() => setPage(pg)}
                className={`w-13 cursor-pointer h-13 rounded-full ${
                  page === pg
                    ? "bg-black text-white"
                    : "bg-white border border-gray-800 hover:bg-[#C69657] hover:border-0 hover:text-white"
                } flex items-center justify-center transition`}
              >
                {pg}
              </button>
            ) : null
          )}

          {/* Next button if not on last page */}
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="w-13 h-13 rounded-full border border-gray-600  flex items-center justify-center hover:bg-[#C69657] hover:text-white cursor-pointer hover:border-0 transition"
            >
              <IoIosArrowForward size={22} />
            </button>
          )}
        </div>
      </section>

      <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
    </>
  );
};

export default CustomProductGrid;
