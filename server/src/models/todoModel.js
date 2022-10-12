import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todoItem: { type: String },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
