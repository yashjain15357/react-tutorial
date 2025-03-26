import{createSlice} from "@reduxjs/toolkit"


//initial state want
const initialState= {
    status : false, 
    userData : null
}
const authSlice = createSlice({ 
    name: "auth", 
    initialState,
    // In the context of Redux, a reducer is a pure function that takes the previous state and an action as arguments and returns the next state.
    reducers:{
        login: (state, action) => {
            state.status=true,
            state.userData= action.payload.userData
        },
        // action is default present
        logout: (state)=>{
            state.status= false,
            state.userData = null
        }
    }
})
export const {login , logout}= authSlice.actions;
export default authSlice.reducer;

