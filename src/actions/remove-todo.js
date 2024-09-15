import { ACTION_TYPE } from '../constants';

export const removeTodo = (id) => ({
	type: ACTION_TYPE.REMOVE_TODO,
	payload: id,
});
