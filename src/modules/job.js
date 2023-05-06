// imports
import { handleActions } from 'redux-actions';
import * as api from "../lib/api/job";


// actions(action type)
const GET_JOBS = 'job/GET_JOBS';


// action creator


// API Actions
const getJobs = () => async dispatch => {
    try {
        const response = await api.readPostsList();
        dispatch({
            type: GET_JOBS,
            payload: response.data
        });
    } catch(e) {
        throw e;
    }
};


// init state
const initialState = {
	jobs: null,
};


// reducer
const job = handleActions(
	{
		[GET_JOBS]: (state, action) => ({
			...state,
			jobs: action.payload
		}),
	},
	initialState
);


// Exports
export const actionCreators = {
	getJobs,
};


export default job;
