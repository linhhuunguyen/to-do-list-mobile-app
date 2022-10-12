import express from "express";
import {
  createTodo,
  editTodo,
  getTodoList,
  removeTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/todo-list", getTodoList);

router.post("/new-todo", createTodo);

router.put("/update-todo/:id", editTodo);

router.delete("/todo/:id", removeTodo);

export default router;
