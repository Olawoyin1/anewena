import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="w-full h-screen overflow-y-hidden bg-cover bg-center p-4 flex items-center justify-center md:justify-end"
      style={{ backgroundImage: "url('../../Images/landing.png')" }}
    >
      <div className="max-w-xl w-full md:mr-20">
        {/* White Content Box */}
        <div className="bg-white/90 px-4 md:px-8 py-12 shadow-lg">
          {/* Title */}
          <div className="mb-6">
            <span className="text-4xl md:text-[52px] font-bold leading-[50px] tracking-[0.35em]">
              ANEWENA
            </span>
          </div>

          {/* Subtitle */}
          <h2 className="text-[17px] font-semibold leading-[22px] tracking-[17.51px] text-[#a1acaf] uppercase">
            Collection
          </h2>

          {/* Paragraph */}
          <div className="pt-6 text-[14px] leading-[25px] text-gray-700 space-y-4">
            <p>
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
            </p>
            <p>
              When an unknown printer took a galley of type and scrambled it to make a type.Ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
            </p>
            <p>
              It has survived not only five centuries, but also a long journey through design and publishing history.
            </p>
            <p>
              Ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
            </p>
          </div>
        </div>

        {/* Button Outside White Box */}
        <Link to="/shop">
          <button className="w-full md:w-fit mt-4 bg-black text-white py-3 px-10 text-sm uppercase hover:bg-gray-900 transition">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
