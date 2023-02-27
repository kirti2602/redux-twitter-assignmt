import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./loginActionTypes";

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}