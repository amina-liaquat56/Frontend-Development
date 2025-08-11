import React, { useState } from "react";

export default function Form1() {
  const [user, setUser] = useState({ fname: "sachin", lname: "tendulkar" });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input
          name="fname"
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        Last Name:
        <input
          name="lname"
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <br />
        <br />
        state data: {user.fname + " " + user.lname}
        <button>submit</button>
      </form>
    </>
  );
}

