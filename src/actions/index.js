import test from '../apis/test';

export const login = (username, password) => async (dispatch, getState) => {
    const response = await test.post('login', {
        username: username,
        password: password
    })
    console.log(response);
    if(response) {
        dispatch({
            type: "LOGIN",
            payload: response.data
        });
    }
}