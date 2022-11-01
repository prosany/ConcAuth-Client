import React from "react";
import Cards from "../../Components/Cards/Cards";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="lg:flex md:block">
      <Sidebar />
      <div className="lg:w-[80%] md:w-[100%]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
