import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestThunk(type: any, request: any) {
    // 성공 및 실패 액션 타입을 정의합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return (params: any) => async (dispatch: any) => {
        dispatch({ type });
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
            dispatch(finishLoading(type));
        } catch(e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            dispatch(startLoading(type));
            throw e;
        }
    };
}