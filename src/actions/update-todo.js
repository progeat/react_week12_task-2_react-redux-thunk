import { changeTodo } from './change-todo';
import { updateRequestTodo } from '../api';
import { setIsLoading } from './set-is-loading';
import { setErrorFetch } from './set-error-fetch';

export const updateTodo = (updatedTodo) => (dispatch) => {
	dispatch(setIsLoading(true));

	updateRequestTodo(updatedTodo)
		.then((responseData) => {
			if (!responseData.ok) {
				throw Error('data could not be sent to this resource');
			}

			return responseData.json();
		})
		.then((todo) => dispatch(changeTodo(todo)))
		.catch((error) => dispatch(setErrorFetch(error.message)))
		.finally(() => dispatch(setIsLoading(false)));
};
