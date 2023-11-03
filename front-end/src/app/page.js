"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState([]);

  async function fetchdata() {
    fetch(`http://localhost:8080/user`)
      .then((fetchData) => fetchData.json())
      .then((fetchData) => {
        setUser(fetchData.data);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const onClick = (id, age) => {
    console.log(id);
    console.log(age);
    // back luu huselt id g hamt
    // 
  };


  return (
    <div className="w-[100vw] h-[100vh] bg-slate-200">
      {user.map((cur, index) => (
        <div key={cur.id} style={{ border: "1px solid black", padding: 20 }}>
          <p>{cur.age}</p>
          <input type="text"/>
          <button onClick={() => onClick(cur.id, cur.age)}>submit</button>
        </div>
      ))}
      <input type="text" />
    </div>
  );
}
