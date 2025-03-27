import React from "react";
import {useDispatch} from "react-redux" //It gives you access to the dispatch function from the Redux store, which is used to dispatch actions.
import authServices from '../../Appwrite/auth'
import {logout, Logout} from "../../Store/aurthSlice"
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authServices.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        >Logout</button>
    )
}

export default LogoutBtn