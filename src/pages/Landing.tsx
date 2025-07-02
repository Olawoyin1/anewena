import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center md:justify-end"
      style={{ backgroundImage: "url('../../Images/landing.png')" }} // Replace with your image path or URL
    >
      <div className=" bg-opacity-90 rounded-xl w-[90%] max-w-[400px] m-30">
        <div className="bg-white p-6 flex flex-col gap-4">
          <h3 className="text-4xl m-0 p-0 font-bold leading-[50px] tracking-[20px] ">
            ANEWENA
          </h3>

          <h4 className="tracking-[14px] ">COLLECTION</h4>
          <p className="text-xs leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            qui impedit eum quasi dolores dolorum placeat neque, sint, molestias
            perferendis fugiat perspiciatis sit voluptas, ratione eaque iste
            voluptatibus modi labore!
          </p>
          <p className="text-xs leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam
            doloremque ea cum earum.
          </p>
          <p className="text-xs leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam
            doloremque ea cum earum.
          </p>
          <p className="text-xs leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur iste architecto tempore harum accusantium? Dicta
            deserunt blanditiis et perspiciatis nulla, dolorum eius! Itaque
            repellat culpa voluptatibus a error ratione ullam.
          </p>
        </div>
        <Link to="/shop" className="cursor-pointer">
          <button className="btn bg-black cursor-pointer text-white text-sm py-3 px-7 mt-3">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
