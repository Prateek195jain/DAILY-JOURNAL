
import { Link } from "react-router-dom";

const BlogCard = ({id,img,title,category}) => {
  return (
    <div className="bg-white shadow-md overflow-hidden rounded-xl">
      <Link to={`/blog/${id}`}>
        <div className="flex flex-col w-full ">
          <img src={img} className="w-full h-[22rem] object-cover" />
          <div className="p-2">
            <h2 className="mt-2 text-xl text-left">{title}</h2>
            <p className="text-sm text-left opacity-70">{category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
