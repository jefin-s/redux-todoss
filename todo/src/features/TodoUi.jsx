import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "./todoslice";

const TodoUi = () => {
  const [Text, setText] = useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addNewtodo = () => {
    if (Text.trim() === "") return;
    dispatch(addtodo(Text));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={Text}
      />
      <button onClick={addNewtodo}>Add to do</button>
      <ul>
        {todo.map((item, index) => (
          <div>
            <li>
              {item}{" "}
              <span>
                <button
                  onClick={() => {
                    dispatch(removetodo(index));
                  }}
                >
                  remove
                </button>
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoUi;
