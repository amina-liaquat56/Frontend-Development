fetchHook.js
------------
import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }, []);

  return data;
}


test.js
-------
import React, { useState, useEffect } from 'react'
import useFetch from '../customhook/fetchHook';

export default function Test() {
    let users = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            <table className='table table-bordered table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, ind) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
