import { ACTION_TYPE } from '../constants';

export const addTodo = (todo) => ({
	type: ACTION_TYPE.ADD_TODO,
	payload: todo,
});
