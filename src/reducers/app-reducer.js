import { ACTION_TYPE } from '../constants';

export const initialAppState = {
	todos: [],
};

export const appReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_TODOS:
			return {
				...state,
				todos: payload,
			};

		case ACTION_TYPE.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, payload],
			};

		case ACTION_TYPE.CHANGE_TODO:
			return {
				...state,
				todos: [...state.todos].map((todo) =>
					todo.id === payload.id ? payload : todo,
				),
			};

		case ACTION_TYPE.REMOVE_TODO:
			return {
				...state,
				todos: [...state.todos].filter((todo) => todo.id !== payload.id),
			};

		default:
			return state;
	}
};
