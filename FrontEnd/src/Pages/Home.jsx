import  { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
// import { BlogCardData } from "../data/BlogCardData";
import { getBlogs } from "../api/Api";
import { useSearchParams } from "react-router-dom";


export default function Home() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('category'));
  
  const [blogs, setblogs] = useState([]);
  const apiURL = 'http://localhost:3000/';

  useEffect(() => {
    async function fetchData() {
      const allBlogs = await getBlogs();
      console.log("API Response:", allBlogs);
      setblogs(allBlogs.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      // let category = searchParams.get('category');
      const allBlogs = await getBlogs(searchParams.get('category'));
      console.log("API Response:", allBlogs);
      setblogs(allBlogs.data);
    }
    fetchData();
  }, [searchParams]);

  return (
    <div>
      <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {blogs && blogs.map((e, index) => {
            return (
              <BlogCard
                key={index}
                id = {e.id}
                img={`${apiURL}${e.image}`}
                title={e.title}
                category={e.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
