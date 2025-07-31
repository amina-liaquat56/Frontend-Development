import React from 'react';
export default function EmployeeList {
        let employees = [
            { eId: 101, name: "amina", sal: 5000 },
            { eId: 104, name: "fatima", sal: 8000 },
            { eId: 103, name: "ayesha", sal: 7000 },
            { eId: 102, name: "muneeba", sal: 9000 }
        ]
        return 
            <table border='1' align='center' width='50%'>
                {employees.map(emp => (
                    <tr key={emp.eId}>
                        <td>{emp.eId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                    </tr>
                ))}
            </table>
}
