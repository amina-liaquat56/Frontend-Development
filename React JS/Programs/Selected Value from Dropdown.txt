import React, { useState } from 'react'
export default function StateDropDown() {
    const stateNames = ['Karnataka', 'Odisha', 'Tamilnadu', 'Kerala', 'Bihar', 'UP'];
    const [selectedState, setSelectedState] = useState(stateNames[0]);
    const stateChanged = (e) => {
        setSelectedState(e.target.value)
    }
    return <>
        <select onChange={stateChanged}>
            {stateNames.map((state, ind) => {
                return <option key={ind}>{state}</option>
            })}
        </select>
        <h2>You have Selected -  {selectedState}</h2>
    </>
}
