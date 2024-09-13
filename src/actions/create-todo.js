import { createRequestTodo } from '../api';

export const createTodo = (newTodo) => (dispatch) => {
	createRequestTodo(newTodo)
		.then((response) => response.json())
		.then((todo) => console.log('новое дело', todo));
	// .then((todo) => dispatch(setTodos(todo)));
};
