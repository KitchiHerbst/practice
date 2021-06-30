import React, { useEffect, useState } from "react";

function UserList(props) {
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((userData) => setUsers(userData.results));
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);

  return <div>
      {users.map(user => <div> <h1>{user.name.first}</h1></div>)}
  </div>;
}

export default UserList;
