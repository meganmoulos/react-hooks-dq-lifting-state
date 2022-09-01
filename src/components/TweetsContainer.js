import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(users[0])

  function handleChangeUser(userId){
    const clickedUser = users.find((user) => user.id === userId)
    setSelectedUser(clickedUser)
  }

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList handleChangeUser={handleChangeUser} users={users} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
