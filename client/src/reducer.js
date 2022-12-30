export const initialState = {

    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            localStorage.setItem('user', JSON.stringify(action.user));
            return {
                ...state,
                user: action.user,
            };
        case 'EMPTY_USER':
            localStorage.removeItem('user');
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default reducer;