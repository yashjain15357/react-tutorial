import { createSlice , nanoid } from "@reduxjs/toolkit";
// nanoid:- generate a unique id
const initialState={
    todos:[{id:1, text: "hellw world"}]
}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        // how to send data in store
        addTodo:(state , action)=>{
            const todo={
                id:nanoid(), // give unique id
                text:action.payload

            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!== action.payload)
        }
    }
})

export const {addTodo , removeTodo }= todoSlice.actions
export default todoSlice.reducer