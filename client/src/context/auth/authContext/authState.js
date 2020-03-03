import React,{useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN,
    SET_ERROR,
    CLEAR_EDIT,
    CLEAR_ERROR
} from '../../types';

function authState(props) {

    const initialState = {
        userAuth:null,
        errors:null
    };

    const [state,dispatch] = useReducer(authReducer,initialState);

    //register user 

    const registerUser = async userData  => {
        const config = {
            header : {
                'Content-Type':'application/json'
            }
        }

        try{
            const res = await axios.post('/register',userData,config);
            dispatch({
                type:SUCCESS_REGISTER,
                payload:res.data
            })
        }catch(err){
            dispatch({
                type:FAIL_REGISTER,
                payload:err.response.data
            })
        }
    }

    const loginUser = async userData  => {
        const config = {
            header : {
                'Content-Type':'application/json'
            }
        }

        try{
            const res = await axios.post('/auth',userData,config);
            dispatch({
                type:SUCCESS_LOGIN,
                payload:res.data
            })
        }catch(err){
            dispatch({
                type:FAIL_LOGIN,
                payload:err.response.data
            })
        }
    }

    const setError = err => {
        dispatch({
            type:SET_ERROR,
            payload:err
        })
    }

    const clearError = () => {
        dispatch({
            type:CLEAR_ERROR,
        
        })
    }
    return (
        <AuthContext.Provider value={{
            userAuth:state.userAuth,
            errors:state.errors,
            registerUser,
            setError,
            clearError
        }}>{props.children}</AuthContext.Provider>
    )
}

export default authState
