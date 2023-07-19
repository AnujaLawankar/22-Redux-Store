import { ADD_POST, UPDATE_POST, DELETE_POST } from './actions';

const initialState = {
    posts: [],
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post],
            };

        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.post.id ? action.post : post
                ),
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };

        default:
            return state;
    }
}
