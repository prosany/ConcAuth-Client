import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Sidebar from "../../Components/Sidebar/Sidebar";
import resTime from "../../Helpers/ResponseTime";

const Category = () => {
  const params = useParams();
  const [catgeory, setCatgeory] = useState([]);
  const [quote, setQuote] = useState([]);
  const [times, setTime] = useState({});

  useEffect(() => {
    fetch("http://localhost:8090/categories")
      .then((res) => res.json())
      .then((data) => setCatgeory(data));
  }, []);

  useEffect(() => {
    let startTime = new Date().getTime();
    fetch(`http://localhost:8090/category/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        let endTime = new Date().getTime();
        setTime(resTime(startTime, endTime));
      });
  }, [params]);

  return (
    <div className="lg:flex md:block">
      <Sidebar catgeory={catgeory} />
      <div className="lg:w-[80%] md:w-[100%]">
        <h4 className="text-center">
          Data Successfully Loaded from{" "}
          <span className="bg-violet-200 text-violet-800 px-1 py-1 rounded">
            {params.id}
          </span>{" "}
          Category
        </h4>
        <p className="text-xs m-0 text-center">
          Loaded in <span className={times?.className}>{times?.res}ms</span>
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {quote.map((qut) => (
            <Cards key={qut.id} quote={qut} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
