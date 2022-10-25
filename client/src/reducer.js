export const initialState = {

    user: null
};

const reducer = (state, action) => {
    console.log(action.user);
    switch (action.type) {



        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "EMPTY_USER":
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }

}

export default reducer;