import { ACTION_TYPE } from '../constants';

export const initialErrorsState = {
	fetchError: '',
	creationError: '',
};

export const errorsReducer = (state = initialErrorsState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_ERROR_FETCH:
			return {
				...state,
				fetchError: payload,
			};

		case ACTION_TYPE.SET_ERROR_CREATION:
			return {
				...state,
				creationError: payload,
			};

		default:
			return state;
	}
};
