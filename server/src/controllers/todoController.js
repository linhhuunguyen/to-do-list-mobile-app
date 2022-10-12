import Todo from "../models/todoModel.js";

export const getTodoList = async (req, res) => {
  const todoList = await Todo.find();

  res.status(201).json(todoList);
};

export const createTodo = async (req, res) => {
  const { todoItem } = req.body;

  const todo = await Todo.create({ todoItem });

  await todo.save();
  res.status(200).json(todo);
};

export const editTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400).json({
      status: "error",
      msg: "Todo not found",
    });
  }

  const newTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidationrs: true,
    useFindAndModify: false,
  });

  res.status(200).json(newTodo);
};

export const removeTodo = async (req, res) => {
  const todoItem = await Todo.findById(req.params.id);

  if (!todoItem) {
    res.status(400).json({
      status: "error",
      msg: "Todo not found",
    });
  }

  await todoItem.remove();
  res
    .status(200)
    .json({ success: true, message: "Todo items Deleted Successfully" });
};
