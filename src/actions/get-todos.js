import { getRequestTodos } from '../api';
import { setTodos } from './set-todos';

export const getTodos = (dispatch) =>
	getRequestTodos()
		.then((response) => response.json())
		.then((todos) => dispatch(setTodos(todos)));
