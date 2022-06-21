import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

// const [posts, setPosts] = useState([
//   { id: 1, title: "JavaScript", body: "Description" },
//   { id: 2, title: "Python", body: "Description" },
//   { id: 3, title: "ReactJS", body: "Description" },
// ]);
// const [selectedSort, setSelectedSort] = useState("");
// const [searchQuery, setSearchQuery] = useState("");

// const sortedPosts = useMemo(() => {
//   if (selectedSort) {
//     return [...posts].sort((a, b) =>
//       a[selectedSort].localeCompare(b[selectedSort])
//     );
//   }
//   return posts;
// }, [selectedSort, posts]);

// const sortedAndSearchedPosts = useMemo(() => {
//   return sortedPosts.filter((post) =>
//     post.title.toLowerCase().includes(searchQuery)
//   );
// }, [searchQuery, sortedPosts]);

// const createPost = (newPost) => {
//   setPosts([...posts, newPost]);
// };

// const removePost = (post) => {
//   setPosts(posts.filter((p) => p.id !== post.id));
// };

// const sortPosts = (sort) => {
//   setSelectedSort(sort);
// };

// return (
//   <div className="App">
//     <PostForm create={createPost} />
//     <hr style={{ margin: "15px 0" }} />
//     <div>
//       <MyInput
//         placeholder="Поиск новостей"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <MySelect
//         value={selectedSort}
//         onChange={sortPosts}
//         defaultValue={"Сортировка по"}
//         options={[
//           { value: "title", name: "По названию" },
//           { value: "body", name: "По описанию" },
//         ]}
//       />
//     </div>
//     {sortedAndSearchedPosts.length !== 0 ? (
//       <PostList remove={removePost} posts={sortedAndSearchedPosts} />
//     ) : (
//       <h1 style={{ textAlign: "center", color: "steelblue" }}>
//         Новостей не найдено
//       </h1>
//     )}
//   </div>
// );
