// imports
import { handleActions } from 'redux-actions';
import * as api from "../lib/api/auth";


// actions
const SIGN_UP = 'auth/SIGN_UP';
const SIGN_IN = 'auth/SIGN_IN';
const UNLOAD_AUTH = 'auth/UNLOAD_AUTH';
const CHECK_AUTH = 'auth/CHECK_AUTH';
const LOGOUT = 'auth/LOGOUT';


// action creator
export const unloadAuth = () => ({ type: UNLOAD_AUTH });
export const checkAuth = () => ({ type: CHECK_AUTH });
export const logout = () => ({ type: LOGOUT });


// API Actions
const signUpAction = ({ email, username, password }) => async dispatch => {
	try {
		const response = await api.signUp({ email, username, password });
		dispatch({
			type: SIGN_UP,
			payload: response.data
		})
	} catch(e) {
		throw e;
	}
}

const signInAction = ({ email, password }) => async dispatch => {
	try {
		const response = await api.signIn({ email, password })
		dispatch({
			type: SIGN_IN,
			payload: response.data
		})
	} catch(e) {
		throw e;
	}
}

const checkAuthAction = () => async dispatch => {
	try {
		const response = await api.checkAuth()
		dispatch({
			type: CHECK_AUTH,
			payload: response.data
		})
	} catch(e) {
		throw e;
	}
}

const logoutAction = () => async dispatch => {
	try {
		localStorage.removeItem("access");
		dispatch({
			type: LOGOUT,
		})
	} catch(e) {
		throw e;
	}
}


// init state
const initialState = {
	auth: null,
	user: null,
};


// reducer
const auth = handleActions(
	{
		[SIGN_UP]: (state, action) => ({
			...state,
			auth: action.payload,
		}),
		[SIGN_IN]: (state, action) => ({
			...state,
			user: action.payload,
		}),
		[UNLOAD_AUTH]: (state, action) => ({
			...state,
			auth: null,
		}),
		[CHECK_AUTH]: (state, action) => ({
			...state,
			user: action.payload,
		}),
		[LOGOUT]: (state, action) => ({
			...state,
			user: null,
		})
	},
	initialState
);


// Exports
export const actionCreators = {
	signUpAction,
	signInAction,
	checkAuthAction,
	logoutAction,
};

export default auth;
