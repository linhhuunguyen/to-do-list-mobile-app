import {API} from './api';

interface TodoParamType {
  todoItem: string;
}

export const getTodoList = async () => await API.get('/todo-list');

export const createTodo = async (param: TodoParamType) =>
  await API.post('/new-todo', param);

export const editTodo = async (id: string, todoItem: string) =>
  await API.put(`/update-todo/${id}`, todoItem);

export const deleteTodo = async (id: string) => await API.delete(`/todo/${id}`);
