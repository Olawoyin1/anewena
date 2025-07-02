// components/FilterSidebar.tsx
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

type FilterSectionProps = {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

const FilterSection = ({ label, isOpen, onToggle, children }: FilterSectionProps) => (
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

type FilterSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
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
            <button onClick={onClose}>
              <IoClose size={22} />
            </button>
          </div>

          <div className="p-4">
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
                  <div key={color} className="flex text-xs items-center gap-1 capitalize">
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
              label="TEXTILE"
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

export default FilterSidebar;
