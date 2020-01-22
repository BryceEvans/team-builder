import React, { useState } from 'react';

const UserForm = (props) => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "",
  })

  const handleChanges = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    const newUser = {
      ...user,
      id: Date.now()
    }
    props.addNewUser(newUser)
    console.log(newUser)
    setUser({ firstName: "", lastName: "", usrename: "", password: "", role: "" })
  }

  return ( 
    <div>
      <form onSubmit={submitHandler}>

        <h1>Register User</h1>

        <label htmlFor="firstName">First Name</label>
        <input 
          type="text"
          onChange={handleChanges}
          id="firstName"
          name="firstName"
          value={user.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text"
          onChange={handleChanges}
          id="lastName"
          name="lastName"
          value={user.lastName}
        />

        <label htmlFor="username">Username</label>
        <input 
          type="text"
          onChange={handleChanges}
          id="username"
          name="username"
          value={user.username}
        />

        <label htmlFor="password">Password</label>
        <input 
          type="password"
          onChange={handleChanges}
          id="password"
          name="password"
          value={user.password}
        />

        <label htmlFor="password">Role</label>
        <input 
          type="text"
          onChange={handleChanges}
          id="role"
          name="role"
          value={user.role}
        />

        <button name="submitButton" type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default UserForm;