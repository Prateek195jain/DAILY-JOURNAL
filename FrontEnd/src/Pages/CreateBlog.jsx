import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { menu } from "../data/menu";
import { createBlog, uploadFile } from "../api/Api";

export default function CreateBlog() {
  const blankBlog = {
    title: "",
    image: "",
    post: "<p><br></p>",
    category: "",
  };

  const [newblog, setNewBlog] = useState(blankBlog);

  const handleUpload = async (event) => {
    let uploadedFile = await uploadFile(event.target.files[0]);
    if (uploadedFile.path) {
      setNewBlog({ ...newblog, image: uploadedFile.path });
    }
  };

  const handleSubmit = async () => {
    let createdBlog = await createBlog(newblog);
    if(createdBlog.description == 1) {
      setNewBlog(blankBlog);
      alert("Blog created successfully.");
    }
  }
  return (
    <section>
    <div className="md:absolute lg:top-[65%] md:top-[60%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
      <div className="bg-slate-200 p-5 rounded-xl text-left">
        <h1 className="text-2xl mb-5">Create Blog Post</h1>
        <div className="flex flex-col">
          <label className="ml-1 text-gray-500">Title</label>
          <input
            type="text"
            className="h-10 rounded border border-gray-300 my-2 p-2"
            value={newblog.title}
            onChange={(e) => setNewBlog({ ...newblog, title: e.target.value })}
          />
          <label className="ml-1 text-gray-500">Category</label>
          <select
            value={newblog.category}
            onChange={(e) =>
              setNewBlog({ ...newblog, category: e.target.value })
            }
            className="h-10 rounded border border-gray-300 my-2 p-2"
          >
            <option value="" default disabled>
              Select Category
            </option>
            {menu.map((e) => {
              return <option value={e.text}>{e.text}</option>;
            })}
          </select>
          <label className="ml-1 text-gray-500">Image</label>
          <input
            onChange={(e) => handleUpload(e)}
            type="file"
            className="my-2 p-2"
          ></input>
          <label className="ml-1 text-gray-500">Post</label>
          <ReactQuill
            className="rounded bg-white mb-2 mt-2"
            theme="snow"
            value={newblog.post}
            onChange={(e) => {
              setNewBlog({ ...newblog, post: e });
            }}
          />
          <hr />
          <button onClick={() => handleSubmit()} className="bg-slate-500 text-white h-8 w-fit px-2 mt-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
