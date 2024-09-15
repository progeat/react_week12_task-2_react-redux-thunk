import { ACTION_TYPE } from '../constants';

export const changeTodo = (updateTodo) => ({
	type: ACTION_TYPE.CHANGE_TODO,
	payload: updateTodo,
});
