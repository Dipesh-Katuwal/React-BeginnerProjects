import styles from "./InputTodo.module.css";
import { useRef } from "react";

function InputTodo({ todoItems, setTodoItems }) {
  const todo = useRef(null);

  const handleAdd = () => {
    const value = todo.current?.value?.trim();
    if (!value) {
      alert("Add todo first...");
      return;
    }
    const newTodo = {
      id: todoItems.length + 1,
      todoName: value,
    };
    setTodoItems([newTodo, ...todoItems]);
    todo.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            placeholder="Add a new task"
            ref={todo}
            onKeyDown={(e) => { if (e.key === 'Enter') handleAdd(); }}
          ></input>
        </div>
        <div className="col-5 d-flex justify-content-end">
          <button
            type="button"
            className={`btn btn-success ${styles.addbtn}`}
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputTodo;
