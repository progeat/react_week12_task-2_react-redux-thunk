export const initialErrorsState = {
	fetchError: '',
	creationError: '',
};

export const errorsReducer = (state = initialErrorsState, { type, payload }) => {
	switch (type) {
		case 'SET_ERROR_FETCH':
			return {
				...state,
				fetchError: payload,
			};

		case 'SET_ERROR_CREATION':
			return {
				...state,
				creationError: payload,
			};

		default:
			return state;
	}
};
