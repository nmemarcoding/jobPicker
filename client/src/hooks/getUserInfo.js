import { useStateValue } from '../StateProvider';

export function useUser(dispatch) {
    // Check if the user information exists in localStorage
    if (localStorage.getItem('user')) {
        // If it does, retrieve and parse the user information from localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Dispatch an action to set the user information in the state
        dispatch({
            type: 'SET_USER',
            user,
        });
    }
}


export function userInfo(dispatch) {




}