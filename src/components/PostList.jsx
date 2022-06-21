import React from "react";
import PostItem from "./PostItem";

function PostList({ posts, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "steelblue", fontSize: "40px" }}>
        НОВОСТИ SAPA SOFT
      </h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default PostList;
