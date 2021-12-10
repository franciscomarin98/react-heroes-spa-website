import {ActionTypes} from "../types/auth.types";

interface Action {
    type: ActionTypes;
    payload?: any;
}

interface UserState {
    name: string;
    loggedIn: boolean;
}

export const authReducer = (state: UserState, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...action.payload,
                loggedIn: true
            }
        case 'LOGOUT':
            return {
                loggedIn: false
            }
        default:
            return state
    }
}
