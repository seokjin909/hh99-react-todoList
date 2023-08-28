import React from "react";
import { Form, Input,SubmitButton } from "./styles";
import { CiMedicalCross } from "react-icons/ci";

const AddTodo = ({ newToDoTitle, newToDoDescription, setNewToDoTitle, setNewToDoDescription, handleAddNewToDo }) => {
  return (
    <Form>
      <Input placeholder="제목을 입력하세요" value={newToDoTitle} onChange={(e) => setNewToDoTitle(e.target.value)} required />
      <Input placeholder="내용을 입력하세요" value={newToDoDescription} onChange={(e) => setNewToDoDescription(e.target.value)} required />
      <SubmitButton onClick={handleAddNewToDo}>
        <CiMedicalCross />
      </SubmitButton>
    </Form>
  );
};

export default AddTodo;
