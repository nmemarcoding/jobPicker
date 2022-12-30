import  React,{ useContext, useReducer } from 'react'
import * as react from 'react'
import { useEffect } from 'react';

export const StateContext = react.createContext()



export const StateProvider = ({reducer,
initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}    
    </StateContext.Provider>
)

export const useStateValue = () => {
    const [state, dispatch] = useContext(StateContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        dispatch({
            type: 'SET_USER',
            user: JSON.parse(storedUser),
        });
        }
    }, []);

    return [state, dispatch];
  };