import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

const TodoItem = ({id,todoItem,setTodoItems,todoItems}) => {
  return (
    <div className={`${styles.item} d-flex justify-content-between`}>
      <h3 className={styles.name}>
        {todoItem.todoName}</h3>
      <button
        type="button"
        className={`btn btn-danger ${styles.mybtn}`}
      >
        <MdDelete onClick={()=>{
          const newTodos=todoItems.filter(todo => todo.id!=id)
          setTodoItems(newTodos)
        }}/>
      </button>
    </div>
  );
};

export default TodoItem;
