import { ACTION_TYPE } from '../constants';

export const setTodos = (todos) => ({
	type: ACTION_TYPE.SET_TODOS,
	payload: todos,
});
