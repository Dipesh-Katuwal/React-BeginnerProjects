import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import InputTodo from "./components/InputTodo";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";

function App() {

  const [todoItems,setTodoItems]= useState([])

  return (
    <>
      <div className="border-box">
        <Heading/>
        <InputTodo todoItems={todoItems} setTodoItems={setTodoItems}/>
        {
          (todoItems.length==0)?<Message/>:<TodoItems todoItems={todoItems} setTodoItems={setTodoItems}/>
        }
        <Footer todoItems={todoItems} setTodoItems={setTodoItems}/>
      </div>
    </>
  );
}

export default App;
