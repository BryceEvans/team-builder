import React, { useState } from 'react';
import UserForm from "./components/UserForm";
import Users from "./components/Users";

function App() {

  const [users, setUsers] = useState([
    {
      id: 0,
      firstName: "Bryce",
      lastName: "Evans",
      username: "Bryce Monkey",
      password: "evans.bryce@gmail.com",
      role: "software engineer",
    }, 
    {
      id: 1,
      firstName: "Shayna",
      lastName: "Haag Evans",
      username: "Mom of all moms",
      password: "mrs.shayevans@gmail.com",
      role: "best mom",
    },
    {
      id: 2,
      firstName: "User 3",
      lastName: "Third User",
      username: "thirdUser",
      password: "user3@gmail.com",
      role: "user the third",
    }
  ])

  const addNewUser = user => {
    const newUser = setUsers([...users, user])
  }

  return (
    <div>
      <UserForm addNewUser={addNewUser} />
      <h1>Users</h1>
      <Users users={users} />
    </div>
  );
}

export default App;
