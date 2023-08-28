import React from "react";
import AddTodo from "../AddTodo";
import Todo from "../Todo";
import { useToDos } from "../../hooks/useToDos";

const TodoList = () => {
  const {
    toDos,
    newToDoTitle,
    setNewToDoTitle,
    newToDoDescription,
    setNewToDoDescription,
    handleToggleIsDone,
    handleAddNewToDo,
    handleDeleteToDo,
  } = useToDos();

  return (
    <div>
      <AddTodo
        newToDoTitle={newToDoTitle}
        newToDoDescription={newToDoDescription}
        setNewToDoTitle={setNewToDoTitle}
        setNewToDoDescription={setNewToDoDescription}
        handleAddNewToDo={handleAddNewToDo}
      />
      <div>Working..!</div>
      <div style={{ height: "150px" }}>
        {toDos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleToggleIsDone={() => handleToggleIsDone(todo.id)}
              handleDeleteToDo={() => handleDeleteToDo(todo.id)}
            />
          ))}
      </div>
      <div>Done..!</div>
      <div>
        {toDos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleToggleIsDone={() => handleToggleIsDone(todo.id)}
              handleDeleteToDo={() => handleDeleteToDo(todo.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
