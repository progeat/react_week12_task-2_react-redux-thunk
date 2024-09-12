const initialState = {
	todos: [],
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_TODOS':
			return {
				...state,
				todos: payload,
			};
	}
};
