import React, { useState } from "react";

export default function Demo() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");
  const [fNameErrorMsg, setfNameErrorMsg] = useState("");
  const [lNameErrorMsg, setlNameErrorMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(fname + " " + lname);
  };

  const changeHandler = (e) => {
    const inputField = e.target.name;
    if (inputField == "fname") {
      setFname(e.target.value);
      if (!e.target.value) {
        setfNameErrorMsg("firstname should not be empty");
      } else if (e.target.value.length < 5) {
        setfNameErrorMsg("firstname should have atleast 5 chars");
      } else {
        setfNameErrorMsg("");
      }
    } else if (inputField == "lname") {
      setLname(e.target.value);
      if (!e.target.value) {
        setlNameErrorMsg("lastname should not be empty");
      } else if (e.target.value.length < 5) {
        setlNameErrorMsg("lastname should have atleast 5 chars");
      } else {
        setlNameErrorMsg("");
      }
    } else {
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" value={fname} onChange={changeHandler} />
        <span class="text-danger">{fNameErrorMsg}</span> <br/>
        Last Name:
        <input name="lname" value={lname} onChange={changeHandler} />
        <span class="text-danger">{lNameErrorMsg}</span>
        <br /><br />
        <button>submit</button>
      </form>
    </>
  );
}
