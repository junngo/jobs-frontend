import { combineReducers } from "redux";
import job from "./job";
import auth from "./auth";


const rootReducer = combineReducers({
    job,
    auth,
});

export default rootReducer;
