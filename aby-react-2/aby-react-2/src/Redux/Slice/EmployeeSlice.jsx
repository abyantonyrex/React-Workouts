import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
let EmployeeSlice = createSlice({
    name: "Employee",
    initialState,
    reducers:{
        addEmployee(state,action){
            state.push(action.payload)
        }
    }
})

export let {addEmployee} = EmployeeSlice.actions
export default EmployeeSlice.reducer