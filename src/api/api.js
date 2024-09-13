import { HTTP_METHOD } from '../constants';
import config from '../config.json';

const fetchServer = (method, { id, ...payload } = {}) => {
	let url = config.baseURL + 'todos/';
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (method !== HTTP_METHOD.DELETE && method !== HTTP_METHOD.GET) {
		options.body = JSON.stringify(payload);
	}

	return fetch(url, options);
};

export const getRequestTodos = () => fetchServer(HTTP_METHOD.GET);

export const createRequestTodo = (newTodo) => fetchServer(HTTP_METHOD.POST, newTodo);
