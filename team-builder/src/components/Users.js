import React from 'react';

const Users = (props) => {
  return ( 
    <div>
      {props.users.map(user => (
        <div>
          <h3>{user.firstName}</h3>
          <h2>{user.lastName}</h2>
          <h1>{user.username}</h1>
          <p>{user.password}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;