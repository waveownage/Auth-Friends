import React from "react";
import FriendsList from "./FriendsList";
import FriendsListForm from "./FriendsListForm";


export default function ProtectedPage() {
    return (
      <div className="App">
        <FriendsListForm/>
        <FriendsList/>
      </div>
    );
  }
  