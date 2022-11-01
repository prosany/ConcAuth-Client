import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Category = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className="lg:flex md:block">
      <Sidebar />
      <div className="lg:w-[80%] md:w-[100%]">
        <h4 className="text-center">
          Data Successfully Loaded from{" "}
          <span className="bg-violet-200 text-violet-800 px-1 py-1 rounded">
            {param.name}
          </span>{" "}
          Category
        </h4>
        <p className="text-xs m-0 text-center text-yellow-600">
          Loaded in 500ms
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Category;
