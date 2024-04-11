import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import CreateBlog from "./Pages/CreateBlog";
import NoPage from "./Pages/NoPage";

function App() {

  return (
    <>
      {/* Setting up BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          {/* Declaring routes using Routes and Route components */}
          {/* The '/' route is associated with the Layout component */}
          <Route path="/" element={<Layout />}>
            {/* Nested route within the '/' route, associated with the Home component */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog/:id" element={<Blog />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
