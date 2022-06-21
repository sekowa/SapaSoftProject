import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

function PostItem(props) {
  let navigate = useNavigate();
  function toPostIdPage() {
    navigate("/post");
  }

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => props.remove(props.post)}
          style={{ marginRight: 10 }}
        >
          Удалить
        </MyButton>

        <MyButton onClick={toPostIdPage}>Читать</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
