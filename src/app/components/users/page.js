"use client";
import styles from './Users.module.css'

import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className={styles.header_text}>Total users: {users.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {users.map((item) => (
          <div key={item.id} className="card bg-gray-700 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <h2 className="">email: {item.email}</h2>
              <h2 className="">address: {item.address.street}</h2>
              <p>{item.description}</p>
              {/* <div className="card-actions justify-end">
    <Link href={`/posts/${item.id}`}>
      {" "}
      <button className="btn btn-primary">See More</button>
    </Link>
  </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
