import React from "react";
import {useDispatch} from "react-redux" //It gives you access to the dispatch function from the Redux store, which is used to dispatch actions.
import authServices from '../../Appwrite/auth'
import {logout} from "../../Store/aurthSlice"
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
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn