// import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />

  <h1 className="text-center border-b border-gray-300 p-4 font-bold text-[24px] leading-[33px] tracking-[-0.36px] uppercase m-0 ">
  About Us
</h1>
      <section className="w-full px-4 py-16 bg-white space-y-20">
        {/* Section 1: Text Left, Image Right */}
        <div className="grid max-w-6xl mx-auto md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[19px] font-bold uppercase leading-[22px] tracking-[-0.15px] [word-spacing:2px] m-0 p-0">
              Our Mission
            </span>

            <p className="text-gray-600 text-sm mt-10 flex flex-col gap-3 leading-7">
              <p>
                At our fashion online store, our mission is to provide our
                customers with a seamless shopping experience that is both easy
                and enjoyable. We are committed to offering the latest fashion
                trends, high-quality products, and exceptional customer service.
              </p>
              <p>
                We believe that fashion is a form of self-expression and that
                everyone should have access to stylish and affordable clothing.
                That’s why we strive to offer a diverse range of products that
                cater to all styles, sizes, and budgets.
              </p>
              <p>
                As a responsible fashion retailer, we are also committed to
                sustainable and ethical practices. We work with brands that
                share our values and are dedicated to reducing their
                environmental impact and promoting fair labor practices.
              </p>
              <p>
                Our mission is to not only provide our customers with stylish
                and affordable fashion but to also make a positive impact on the
                world around us. We hope to inspire our customers to express
                themselves through fashion while making conscious choices that
                benefit both themselves and the planet.
              </p>
            </p>
          </div>
          <div className="h-[490px] overflow-hidden border-1">
            <img
              src="../../Images/about.jpg" // Replace with actual image path
              alt="About us"
              className="w-full"
            />
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid max-w-6xl mx-auto md:grid-cols-2 gap-10 items-center">
          <div className="h-[490px] border-1 overflow-hidden">
            <img
              src="../../Images/about1.jpg" // Replace with actual image path
              alt="Our story"
              className=" "
            />
          </div>
          <div>
            <span className="text-[19px] font-bold uppercase leading-[22px] tracking-[-0.15px] [word-spacing:2px] m-0 p-0">
              Our Boutique
            </span>

            <p className="text-gray-600 text-sm mt-10 flex flex-col gap-3 leading-7">
              <p>
                Our fashion boutique, where we offer a carefully curated
                selection of fashion items to help you create your own unique
                style. Our boutique is designed to cater to fashion-forward
                individuals who are looking for high-quality clothing and
                accessories that stand out from the crowd.
              </p>

              <p>
                At our boutique, we believe that fashion is an art form and that
                everyone deserves to express themselves through their clothing.
                That’s why we offer a diverse range of products that cater to
                all styles, from chic and classic to edgy and bold.
              </p>

              <p>
                We are passionate about fashion and are dedicated to providing
                our customers with a personalized shopping experience. Our team
                of fashion experts is always on hand to offer styling advice and
                help you find the perfect pieces to elevate your wardrobe.{" "}
              </p>

              <p>
                As a boutique, we also value the importance of sustainability
                and ethical practices in the fashion industry. We are committed
                to working with brands that share our values and prioritize
                ethical production and sustainable materials.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/* <FAQ /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
