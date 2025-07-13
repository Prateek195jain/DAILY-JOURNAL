import  { useEffect, useState } from "react";
import { getBlogById } from "../api/Api";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import dateFormat from "dateformat";

export default function Blog() {
  const { id } = useParams();
  const apiURL = "http://localhost:3000/";
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const allBlogs = await getBlogById(id);
        console.log(allBlogs);
        setBlog(allBlogs.data[0]);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }
    fetchData();
  }, [id]); 

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[60%] overflow-hidden">
        <h1 className="mt-1 text-4xl text-left font-extrabold">{blog.title}</h1>
        <div className="flex mt-4 mb-4">
          <small>{dateFormat(blog.createdon,"mmmm dS, yyyy, h:MM TT")}</small>
        </div>
        <img className="rounded" src={apiURL + blog.image}></img>
        <div>{parse(`${blog.post}`)}</div>
      </div>
    </div>
  );
}
