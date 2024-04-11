import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="bg-white shadow-md overflow-hidden rounded-xl">
      <Link to={`/blog/${props.id}`}>
        <div className="flex flex-col w-full">
          <img src={props.img} />
          <div className="p-2">
            <h2 className="mt-2 text-xl text-left">{props.title}</h2>
            <p className="text-sm text-left opacity-70">{props.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
