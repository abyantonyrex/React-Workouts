import { configureStore } from '@reduxjs/toolkit'
import EmployeeSlice from '../Slice/EmployeeSlice'


export let Store =configureStore ({
    devTools: true,
    reducer: {
        Employee : EmployeeSlice
    }
})
