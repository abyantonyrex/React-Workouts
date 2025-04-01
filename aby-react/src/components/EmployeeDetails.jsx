import React from 'react'
import { Employee } from './Employee'; 

export default function EmployeeName() {
    let employeeDetails = {
        Name: "Aby Rex",
        Age: 22,
        colors: ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black'],
        location: 'Chennai',
        Dept: "ECE"
    };

    return (
        <>
            {/* <Employee name={employeeDetails.Name} age={employeeDetails.Age} colors={employeeDetails.colors} location={employeeDetails.location} /> */}
            <Employee {...employeeDetails} />
        </>
    );
}

