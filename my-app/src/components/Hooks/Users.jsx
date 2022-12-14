import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // const getter = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   const data = await response.json();
    //   setUsers(data);
    // };
    // getter();
    const response = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
