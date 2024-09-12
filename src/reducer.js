const initialState = {
	todos: [],
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_TODOS':
			return {
				...state,
				todos: payload,
			};
	}
};
