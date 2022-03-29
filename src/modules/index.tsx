import { combineReducers } from "redux";
import Counter from './Counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
    Counter,
    sample,
    loading
});

export default rootReducer;