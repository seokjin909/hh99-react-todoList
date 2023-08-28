import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggleStatusTodo } from "../features/todo/toDoSlice";

export const useToDos = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDos);

  const [newToDoTitle, setNewToDoTitle] = useState("");
  const [newToDoDescription, setNewToDoDescription] = useState("");

  const handleToggleIsDone = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  const handleAddNewToDo = (e) => {
    e.preventDefault();
    if (!newToDoTitle.trim().length) {
      return alert("제목을 적어주세요 ❓");
    }

    if (!newToDoDescription.trim().length) {
      return alert("내용을 적어주세요 🥲");
    }

    dispatch(add({ title: newToDoTitle, description: newToDoDescription }));
    setNewToDoTitle("");
    setNewToDoDescription("");
  };

  const handleDeleteToDo = (id) => {
    dispatch(remove(id));
  };

  return {
    toDos,
    newToDoTitle,
    setNewToDoTitle,
    newToDoDescription,
    setNewToDoDescription,
    handleAddNewToDo,
    handleDeleteToDo,
    handleToggleIsDone,
  };
};
