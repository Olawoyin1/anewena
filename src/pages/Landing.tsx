const Landing = () => {
  return (
    <div>
      <div
        className="w-full h-[100vh] overflow-hidden overflow-y-hidden flex justify-around md:justify-end items-center p-4 md:px-7 md:py-7 bg-[#dfdfdf] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://firebrick-manatee-316512.hostingersite.com/wp-content/uploads/2025/07/Screenshot-2025-04-15-132846.png')",
        }}
      >
        

        {/* Right side text box */}
        <div className="w-[490px] max-w-full flex flex-col items-start md:justify-end md:mr-30">
          <div className="w-full bg-white/90 flex flex-col items-start justify-start p-10  md:px-8 md:py-12 min-h-[310px] relative transition-all">
            {/* Brand Heading */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-[52px] font-bold leading-[10px] tracking-[20px]">
                ANEWENA
              </h1>
            </div>

            {/* Subheading */}
            <div className="mt-3 md:mt-5">
              <h2 className="text-sm md:text-[17px] text-center md:text-start font-semibold tracking-[1.1em] text-gray-400 leading-[22px]">
                COLLECTION
              </h2>
            </div>

            {/* Description Text */}
            <div className="text-[14px] text-gray-700 leading-[25px] tracking-[0.19px]  max-w-full">
              <div className="mt-3 md:pt-5">
                <p className="mb-4">
                  <strong className="font-semibold">Lorem Ipsum</strong> is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but a
                </p>
                <p className="mb-4">
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but a
                </p>
                <p>
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but a ever since the 1500s,
                  when an unknown&nbsp;
                </p>
              </div>
            </div>
          </div>

          <a
            href="/shop"
            className="mt-6 block w-full md:w-fit text-center md:inline-flex items-center justify-center text-white text-[12px] font-semibold uppercase tracking-[0.72px] px-[50px] py-[18px] bg-black border border-black hover:bg-gray-900"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
