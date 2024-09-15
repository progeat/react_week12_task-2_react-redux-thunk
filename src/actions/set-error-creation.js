import { ACTION_TYPE } from '../constants';

export const setErrorCreation = (error) => ({
	type: ACTION_TYPE.SET_ERROR_CREATION,
	payload: error,
});
