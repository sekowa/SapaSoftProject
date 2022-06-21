import React, { useMemo, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import "../styles/App.css";

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "статья про Python",
      body: "Python является мультипарадигмальным языком программирования, поддерживающим императивное, процедурное, структурное, объектно-ориентированное программирование, метапрограммирование и функциональное программирование. Задачи обобщённого программирования решаются за счёт динамической типизации",
    },
    {
      id: 2,
      title: "статья про JavaScript",
      body: "JavaScript  — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript.",
    },
    {
      id: 3,
      title: "ReactJS",
      body: "библиотека для создания пользовательских интерфейсов",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          placeholder="Поиск новостей"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка по"}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <h1 style={{ textAlign: "center", color: "steelblue" }}>
          Новостей не найдено
        </h1>
      )}
    </div>
  );
}

export default Posts;
