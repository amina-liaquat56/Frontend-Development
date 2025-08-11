import React, { useState } from 'react'
import { useRef } from 'react';

export default function FormDemo2() {
    let myRef1 = useRef('')
    let myRef2 = useRef('')
    const submitHandler = (e) => {
        e.preventDefault();
        const fname = myRef1.current.value;
        const lname = myRef2.current.value;
        console.log(fname, lname)
    }
    return <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" defaultValue={'Sachin'} ref={myRef1} />
        Last Name:
        <input name="lname" defaultValue={'Tendulkar'} ref={myRef2} />
        <br /><br />
        <button>submit</button>
    </form>
}
