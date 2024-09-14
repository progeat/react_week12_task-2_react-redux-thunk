export const initialAppState = {
	todos: [],
};

export const appReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case 'SET_TODOS':
			return {
				...state,
				todos: payload,
			};

		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, payload],
			};

		case 'CHANGE_TODO':
			return {
				...state,
				todos: [...state.todos].map((todo) =>
					todo.id === payload.id ? payload : todo,
				),
			};

		case 'REMOVE_TODO':
			return {
				...state,
				todos: [...state.todos].filter((todo) => todo.id !== payload.id),
			};

		default:
			return state;
	}
};
