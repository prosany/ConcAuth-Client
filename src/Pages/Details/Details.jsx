import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import QuoteLoading from "../../Components/Loading/QuoteLoading";

const Details = () => {
  const params = useParams();

  const [heart, setHeart] = useState("fa-regular");
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(false);
  const reactHeart = () => {
    toast.success("Thanks for the heart react");
    setHeart("fa-solid");
  };

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8090/quote/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingle(data);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <>
      {loading ? (
        <QuoteLoading />
      ) : (
        <>
          <figure className="mx-auto max-w-screen-md text-center pt-8 mb-10">
            <svg
              aria-hidden="true"
              className="mx-auto mb-3 w-12 h-12 text-gray-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              ></path>
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-90">
                "{single.quote}"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Author"
              />
              <div className="flex items-center divide-x-2 divide-gray-500">
                <cite className="pr-3 font-medium text-gray-900 ">
                  {single.by}
                </cite>
                <cite className="pl-3 text-sm font-light text-gray-500">
                  Kicu Ekta
                </cite>
              </div>
            </figcaption>
          </figure>
          <div className="text-center my-5">
            <p className="mx-0 mb-2 text-xs">Quick Actions</p>
            <Link to="/" className="text-blue-800">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <span className="mx-4"></span>
            <button className="text-blue-800" onClick={reactHeart}>
              <i class={`${heart}  fa-heart text-red-700`}></i> Love
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
