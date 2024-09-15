import { ACTION_TYPE } from '../constants';

export const setErrorFetch = (error) => ({
	type: ACTION_TYPE.SET_ERROR_FETCH,
	payload: error,
});
