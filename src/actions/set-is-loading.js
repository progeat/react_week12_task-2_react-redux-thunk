import { ACTION_TYPE } from '../constants';

export const setIsLoading = (boolean) => ({
	type: ACTION_TYPE.SET_IS_LOADING,
	payload: boolean,
});
