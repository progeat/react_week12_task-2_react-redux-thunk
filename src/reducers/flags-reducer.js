export const initialFlagsState = {
	isLoading: false,
};

export const flagsReducer = (state = initialFlagsState, { type, payload }) => {
	switch (type) {
		case 'SET_IS_LOADING':
			return {
				...state,
				isLoading: payload,
			};

		default:
			return state;
	}
};
