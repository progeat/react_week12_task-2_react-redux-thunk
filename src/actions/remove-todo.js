import { type } from '@testing-library/user-event/dist/type';

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	payload: id,
});
