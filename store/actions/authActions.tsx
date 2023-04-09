import { REGISTER_USER, LOGIN_USER } from "../types";

const registerUser = (user: object) => {
    return {
        type: REGISTER_USER,
        payload: user
    }
}

const loginUser = (user: object) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export { registerUser, loginUser};



