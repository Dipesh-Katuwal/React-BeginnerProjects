import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, setTodoItems }) => {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          todoItem={todoItem}
          setTodoItems={setTodoItems}
          todoItems={todoItems}
        />
      ))}
    </div>
  );
};

export default TodoItems;
