import React from "react";
import { Link, useParams } from "react-router-dom";

const Sidebar = ({ catgeory }) => {
  const param = useParams();
  console.log(catgeory);
  return (
    <div className="lg:w-[20%] md:w-[97%] mx-auto">
      <h6 className="text-gray-600 text-xs text-center md:text-left uppercase font-bold my-2">
        Category
      </h6>
      <ul className="hidden lg:block">
        {catgeory.map((cat) => (
          <li key={cat.id} className="text-gray-600 text-xs uppercase my-2">
            <Link
              to={`/category/${cat.id}`}
              className="hover:text-violet-800 hover:font-bold"
            >
              {cat.category_name}
            </Link>
          </li>
        ))}
        {/* <li className="text-gray-600 text-xs uppercase my-2">
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
        </li> */}
      </ul>
      <div className="w-[95%] mx-auto flex flex-wrap lg:hidden">
        {catgeory.map((cat) => (
          <Link
            to={`/category/${cat.id}`}
            key={cat.id}
            className="bg-violet-600 rounded px-5 py-1 text-sm text-white font-bold m-1"
          >
            {cat.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
