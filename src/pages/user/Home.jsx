import React, { useContext } from "react";
import { Carousel } from "../../components/User/Carousel";
import { AuthContext } from "../../context/AuthContext";
import CommonOutlet from "../../components/common/CommonOutlet";

const Home = () => {
  const { isLoggedIn, name } = useContext(AuthContext);

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-center min-h-screen">
      <section className="w-full flex flex-col items-center text-center py-10">
        {isLoggedIn ? (
          <div className="w-full md:w-8/12 flex flex-col items-center">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl my-5">
              Welcome, {name}!
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-2xl">
              Welcome to Foodie! At Foodie, your comfort is our pleasure. 
              Explore a world of delicious flavors, curated recipes, and 
              delightful dining experiences crafted just for you. Enjoy every bite!
            </p>

            <ul className="mt-5 space-y-4 text-lg md:text-xl lg:text-2xl font-bold">
              <li className="flex items-center justify-center gap-3">✅ Fresh & Curated Recipes</li>
              <li className="flex items-center justify-center gap-3">✅ Personalized Recommendations</li>
              <li className="flex items-center justify-center gap-3">✅ Easy-to-Follow Cooking Guides</li>
            </ul>

            <div className="mt-8 w-full md:w-8/12">
              <Carousel />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <CommonOutlet />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;







// import React, { useContext } from "react";
// import { Carousel } from "../../components/User/Carousel";
// import { AuthContext } from "../../context/AuthContext";
// import CommonOutlet from "../../components/common/CommonOutlet";

// const Home = () => {
//   const { isLoggedIn, name } = useContext(AuthContext);

//   return (
//     <div className="container mx-auto px-5 md:px-10 lg:px-20">
//       <section className="min-h-96 flex flex-col md:flex-row gap-10 md:gap-20 py-10">
//         {isLoggedIn ? (
//           <div className="md:w-8/12 w-full">
//             <h1 className="font-bold text-3xl md:text-4xl my-5">Welcome, {name}!</h1>
//             <p className="text-lg md:text-xl font-normal">
//               Welcome to Foodie! At Foodie, your comfort is our pleasure. Explore a world of delicious flavors,
//               curated recipes, and delightful dining experiences crafted just for you. Enjoy every bite!
//             </p>

//             <ul className="mt-5 space-y-3 text-lg">
//               <li className="flex items-center gap-3">
//                 ✅ Fresh & curated recipes
//               </li>
//               <li className="flex items-center gap-3">
//                 ✅ Personalized recommendations
//               </li>
//               <li className="flex items-center gap-3">
//                 ✅ Easy-to-follow cooking guides
//               </li>
//             </ul>

//             <div className="mt-5 w-full md:w-8/12">
//               <Carousel />
//             </div>
//           </div>
//         ) : (
//           <div className="w-full">
//             <CommonOutlet />
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Home;





