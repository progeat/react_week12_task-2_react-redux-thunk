import { getRequestTodos } from '../api';
import { setIsLoading } from './set-is-loading';
import { setTodos } from './set-todos';
import { setErrorFetch } from './set-error-fetch';

export const getTodos = (dispatch) => {
	dispatch(setIsLoading(true));

	getRequestTodos()
		.then((responseData) => {
			if (!responseData.ok) {
				throw Error('data could not be sent to this resource');
			}

			return responseData.json();
		})
		.then((todos) => dispatch(setTodos(todos)))
		.catch((error) => dispatch(setErrorFetch(error.message)))
		.finally(() => dispatch(setIsLoading(false)));
};
