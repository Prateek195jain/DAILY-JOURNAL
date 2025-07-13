
import { Link } from "react-router-dom";
import { menu } from "../data/menu";

export default function Navbar() {
  return (
    <div className="border-b shadow-md">
      <div className="container px-5 py-5 flex justify-between">
        <Link to="/">
          <span className="font-extrabold text-2xl">DAILY JOURNAL</span>
        </Link>
        <div className="flex">
          <ul className="flex">
            {menu.map((e,idx) => {
              return (
                <li key={idx}>
                  <Link className="p-2 flex justify-center items-center hover:border-b-2 border-slate-500"
                  to={`/?category=${e.text}`}>
                    <span>{e.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="bg-slate-500 text-white px-2 py-2 rounded">
            <Link to="/create">New Post</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
