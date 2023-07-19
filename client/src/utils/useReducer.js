import { SET_USER, LOGOUT_USER } from './actions';

const initialState = {
    user: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case LOGOUT_USER:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
}
