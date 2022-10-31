import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mt-20 max-w-[1200px] mx-auto">
        <div className="lg:flex md:block">
          <div className="lg:w-[20%] md:w-[97%] mx-auto">
            <h6 className="text-gray-600 text-xs text-center md:text-left uppercase font-bold my-2">
              Category
            </h6>
            <ul className="hidden lg:block">
              <li className="text-gray-600 text-xs uppercase my-2">
                <Link to="/" className="hover:text-violet-800 hover:font-bold">
                  All
                </Link>
              </li>
              <li className="text-gray-600 text-xs uppercase my-2">
                <Link to="/" className="hover:text-violet-800 hover:font-bold">
                  Love
                </Link>
              </li>
              <li className="text-gray-600 text-xs uppercase my-2">
                <Link to="/" className="hover:text-violet-800 hover:font-bold">
                  Emotion
                </Link>
              </li>
              <li className="text-gray-600 text-xs uppercase my-2">
                <Link to="/" className="hover:text-violet-800 hover:font-bold">
                  Sad
                </Link>
              </li>
              <li className="text-gray-600 text-xs uppercase my-2">
                <Link to="/" className="hover:text-violet-800 hover:font-bold">
                  Birthday
                </Link>
              </li>
            </ul>
            <div className="w-[95%] mx-auto flex flex-wrap lg:hidden">
              <Link
                to="/"
                className="bg-violet-600 rounded px-5 py-1 text-sm text-white font-bold m-1"
              >
                Any
              </Link>
            </div>
          </div>
          <div className="lg:w-[80%] md:w-[100%]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
