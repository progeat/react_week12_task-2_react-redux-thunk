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

		default:
			return state;
	}
};
