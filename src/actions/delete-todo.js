import { deleteRequestTodo } from '../api';
import { removeTodo } from './remove-todo';
import { setErrorFetch } from './set-error-fetch';
import { setIsLoading } from './set-is-loading';

export const deleteTodo = (id) => (dispatch) => {
	dispatch(setIsLoading(true));

	deleteRequestTodo(id)
		.then((responseData) => {
			if (!responseData.ok) {
				throw Error('data could not be sent to this resource');
			}

			return responseData.json();
		})
		.catch((error) => dispatch(setErrorFetch(error.message)))
		.finally(() => {
			dispatch(removeTodo({ id }));
			dispatch(setIsLoading(false));
		});
};
