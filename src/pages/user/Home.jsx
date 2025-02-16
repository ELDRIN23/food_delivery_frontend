import React, { useContext } from "react";
import { Carousel } from "../../components/User/Carousel";
import { AuthContext } from "../../context/AuthContext";
import CommonOutlet from "../../components/common/CommonOutlet";

const Home = () => {
  const { isLoggedIn, name } = useContext(AuthContext);

  return (
    <div className="px-20">
      <section className="min-h-96 flex gap-20 px-20 py-10 w-full">
        {isLoggedIn ? (
          <div className="w-8/12">
            <h1 className="font-bold text-4xl my-5">Welcome {name}</h1>
            <p className="text-xl font-normal">
              Welcome to Foodie! At Foodie, your comfort is our pleasure. Explore a world of delicious flavors,
              curated recipes, and delightful dining experiences crafted just for you. Enjoy every bite!
            </p>

            <div className="w-5/12">
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
