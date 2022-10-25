import  React,{ useContext, useReducer } from 'react'
import * as react from 'react'

export const StateContext = react.createContext()

export const StateProvider = ({reducer,
initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}    
    </StateContext.Provider>
)

export const useStateValue = () =>useContext(StateContext);