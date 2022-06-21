import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";
function AppRouter() {
  return (
    <Routes>
      <Route path="about/*" element={<About />} />

      <Route path="posts/*" element={<Posts />} />
      <Route path="post/*" element={<PostIdPages />} />
    </Routes>
  );
}

export default AppRouter;
