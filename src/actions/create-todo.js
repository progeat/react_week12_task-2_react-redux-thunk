import { createRequestTodo } from '../api';
import { addTodo } from './add-todo';
import { setErrorFetch } from './set-error-fetch';
import { setIsLoading } from './set-is-loading';

export const createTodo = (newTodo) => (dispatch) => {
	dispatch(setIsLoading(true));

	createRequestTodo(newTodo)
		.then((responseData) => {
			if (!responseData.ok) {
				throw Error('data could not be sent to this resource');
			}

			return responseData.json();
		})
		.then((todo) => dispatch(addTodo(todo)))
		.catch((error) => dispatch(setErrorFetch(error.message)))
		.finally(() => dispatch(setIsLoading(false)));
};
