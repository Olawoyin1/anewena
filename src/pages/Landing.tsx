



import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="w-full min-h-[100vh] p-7 md:pb-30 bg-cover bg-center "
      style={{ backgroundImage: "url('../../Images/landing.png')" }}
    >
      {/* Wrapper for positioning */}
      <div className="relative min-h-screen w-full mx-auto">
        {/* Positioned Box */}
        <div
          className="
            absolute
            left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 

            md:left-auto md:right-30 
            md:top-1/2 md:translate-y-[-50%] md:translate-x-0

            w-full max-w-[500px] h-[90vh] 
          "
        >
          <div className="bg-white/90 px-4 md:px-8 py-12 w-full ">
            {/* Title */}
            <div className="mb-6">
              <span className="text-4xl md:text-[52px] font-bold leading-[50px] tracking-[0.35em]">
                ANEWENA
              </span>
            </div>

            {/* Subtitle */}
            <h2 className="text-[17px] font-semibold leading-[22px] tracking-[17.51px] text-[#a1acaf] m-0 p-0 antialiased">COLLECTION</h2>


            {/* Paragraph */}
            <div className="pt-6 text-[14px] leading-[25px] text-gray-700">
              <p className="mb-4">
                <strong>Lorem Ipsum</strong> is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry’s
                standard dummy text ever since the 1500s.and survived not only five centuries, but a long journey
                through design and publishing history.
              </p>
              <p className="mb-4">
                When an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuries, but a
              </p>
              <p className="mb-4">
                and survived not only five centuries, but a long journey
                through design and publishing history.and survived not only five centuries, but a long journey
                through design and publishing history.
              </p>
              <p>
                Ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it.and survived not only five centuries, but a long journey
                through design and publishing history.
              </p>
            </div>

          </div>
            {/* Button */}
            <Link to="/shop">
              <button className="w-full md:w-fit mt-6 bg-black text-white py-3 px-10 text-sm hover:bg-gray-900">
                Enter
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
