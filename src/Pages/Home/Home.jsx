import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  const data = useLoaderData();
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("https://concauth.onrender.com/category/all")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);
  return (
    <div className="lg:flex md:block">
      <Sidebar catgeory={data} />
      <div className="lg:w-[80%] md:w-[100%]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {quote.map((qut) => (
            <Cards key={qut.id} quote={qut} />
          ))}
          {/* <Cards />
          <Cards />
          <Cards /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
