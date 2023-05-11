// imports
import { handleActions } from 'redux-actions';
import * as api from "../lib/api/job";


// actions(action type)
const GET_JOBS = 'job/GET_JOBS';
const GET_JOB = 'job/GET_JOB';
const UNLOAD_JOB = 'job/UNLOAD_JOB';


// action creator
export const unloadJob = () => ({ type: UNLOAD_JOB });


// API Actions
const getJobs = () => async dispatch => {
	try {
		const response = await api.readJobsList();
		dispatch({
			type: GET_JOBS,
			payload: response.data
		});
	} catch(e) {
			throw e;
	}
};

const getJob = (id) => async dispatch => {
	try {
		const response = await api.readJobDetail(id);
		dispatch({
			type: GET_JOB,
			payload: response.data
		});
	} catch(e) {
			throw e;
	}
}


// init state
const initialState = {
	jobs: null,
  job: null,
};


// reducer
const job = handleActions(
	{
		[GET_JOBS]: (state, action) => ({
			...state,
			jobs: action.payload
		}),
		[GET_JOB]: (state, action) => ({
			...state,
			job: action.payload,
		}),
		[UNLOAD_JOB]: (state, action) => ({
			job: null,
			jobs: null,
		}),
	},
	initialState
);


// Exports
export const actionCreators = {
	getJobs,
	getJob,
};


export default job;
