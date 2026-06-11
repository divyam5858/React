import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const FetchDataTable = () => {
  const [users, setuser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, []);

  return (
    <div>
      <table style={{border:"1px solid black", borderCollapse:"collapse"
        }}>
        <thead>
        <tr>
          <th style={{borderBottom:"1px solid black" ,borderRight:"1px solid black" }}>id</th>
          <th style={{borderBottom:"1px solid black",borderRight:"1px solid black"}}>Name</th>
          <th style={{borderBottom:"1px solid black",borderRight:"1px solid black"}}>Mail Id</th>
          <th style={{borderBottom:"1px solid black"}}>Body</th>
        </tr>
        </thead>
    <tbody>
        {users.map((e, i) => {
          return (
            <tr key={i} style={{border:"1px solid black"}}>
              <td style={{borderBottom:"1px solid black" ,borderRight:"1px solid black" }}>{e.id}</td>
              <td style={{borderBottom:"1px solid black" ,borderRight:"1px solid black" }}>{e.name}</td>
              <td style={{borderBottom:"1px solid black" ,borderRight:"1px solid black" }}>{e.email}</td>
              <td style={{borderBottom:"1px solid black"}}>{e.body}</td>
            </tr>
          );
        })}

    </tbody>

      </table>
    </div>
  );
};

export default FetchDataTable;
