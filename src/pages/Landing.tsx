// import { Link } from "react-router-dom";

// const Landing = () => {
//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center flex items-center justify-center md:justify-end"
//       style={{ backgroundImage: "url('../../Images/landing.png')" }} // Replace with your image path or URL
//     >
//       <div className=" bg-opacity-90 rounded-xl w-[90%] max-w-[500px] m-30">
//         <div className="bg-white p-6 py-10 flex flex-col gap-4">
//           <h3 className="text-4xl m-0 p-0 font-bold leading-[50px] tracking-[20px] ">
//             ANEWENA
//           </h3>

//           <h4 className="tracking-[14px] ">COLLECTION</h4>
//           <p className="text-sm text-gray-500 leading-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//             qui impedit eum quasi dolores dolorum placeat neque, sint, molestias
//             perferendis fugiat perspiciatis sit voluptas, ratione eaque iste
//             voluptatibus modi labore!
//           </p>
//           <p className="text-sm text-gray-500 leading-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam
//             doloremque ea cum earum.
//           </p>
//           <p className="text-sm text-gray-500 leading-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam
//             doloremque ea cum earum.
//           </p>
//           <p className="text-sm text-gray-500 leading-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Consequuntur iste architecto tempore harum accusantium? Dicta
//             deserunt blanditiis et perspiciatis nulla, dolorum eius! Itaque
//             repellat culpa voluptatibus a error ratione ullam.
//           </p>
//           <p className="text-sm text-gray-500 leading-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Consequuntur iste architecto tempore harum accusantium? Dicta
//             deserunt blanditiis et perspiciatis nulla, dolorum eius! Itaque
//             repellat culpa voluptatibus a error ratione ullam.
//           </p>
//         </div>
//         <Link to="/shop" className="cursor-pointer">
//           <button className="btn bg-black cursor-pointer text-white text-sm py-3 px-7 mt-3">
//             Enter
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Landing;


import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="w-full min-h-[100vh] bg-cover bg-center p-10 px-17 md:pr-30 md:py-20 flex items-center  justify-center md:justify-end overflow-y-auto"
      style={{ backgroundImage: "url('../../Images/landing.png')" }}
    >
      <div className="bg-opacity-90 w-[90%]h-[90%] max-w-[500px] ">
        <div className="bg-white p-6 py-10 flex flex-col gap-4">
          <h3 className="text-4xl m-0 p-0 font-extrabold align-justify leading-[50px] tracking-[20px] ">
            ANEWENA
          </h3>

          <h2 className="text-[17px] m-0 p-0 font-semibold leading-[22px] tracking-[17.51px] text-[#A1ACAF]">
  COLLECTION
</h2>

          <p className="text-sm text-gray-500 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a <br /><br />

ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a <br /><br />

ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a <br /><br />

ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a ever since the 1500s, when an unknown 
          </p>
        </div>
        <Link to="/shop" className="cursor-pointer">
          <button className="btn bg-black cursor-pointer text-white text-sm py-4 px-14 mt-3">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
