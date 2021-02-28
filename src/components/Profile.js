import React from "react";
import {getCurrentUser} from "../services/auth.service";

const Profile = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.user.userid}
      </p>
      <p>
        <strong>Username:</strong> {currentUser.user.username}
      </p>
      <strong>Books I like:</strong>
      <ul>Books will go here</ul>
    </div>
  );
};

export default Profile;
