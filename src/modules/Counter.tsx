import { Action, createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => (dispatch: (arg0: Action<any>) => void) => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => (dispatch: (arg0: Action<any>) => void) => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

const initialState = 0;

const Counter = handleActions({
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1,
    },
    initialState
);

export default Counter;