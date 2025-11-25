import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo, updatetodo } from "./todoslice";
import { use } from "react";

const TodoUi = () => {
  const [Text, setText] = useState("");
  const [isEditing, setIsediting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [newTask, setNewtask] = useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addNewtodo = () => {
    if (Text.trim() === "") return;
    dispatch(addtodo(Text));
    setText("");
  };
  const startEdit = (index) => {
    setIsediting(true);
    setCurrentIndex(index);
    setNewtask(todo[index]);
  };
  const savetodo=()=>{
    dispatch(updatetodo({index:currentIndex,newText:newTask}))
    setIsediting(false)
    setCurrentIndex(null)

    setNewtask("")
  }
  return (
    
    <div className="flex flex-col items-center mt-10">
      {/* Input + Button */}
      {!isEditing&&
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={Text}
          className="border border-gray-400 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter todo..."
        />
        <button
          onClick={addNewtodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Todo
        </button>
      </div>
}
      {/* Todo List */}
      <ul className="w-80">
        {todo.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-3 shadow-sm"
          >
            <li className="flex-1">
              {isEditing&&currentIndex===index? (<input
                type="text"
                value={currentIndex===index?newTask:item}
                onChange={(e)=>{setNewtask(e.target.value)}}
                className="bg-transparent w-full outline-none text-gray-700"
              />):(
                <span>{item}</span>
              )}
             
            </li>
    {isEditing&&currentIndex===index?(
      <button
                  onClick={savetodo}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Save
                </button>
    ):(
  <div className="flex gap-2">
              {/* EDIT BUTTON (UI only, no logic change) */}
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                onClick={() => startEdit(index)}
              >
                Edit
              </button>

              <button
                onClick={() => dispatch(removetodo(index))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
    )}
          
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoUi;
