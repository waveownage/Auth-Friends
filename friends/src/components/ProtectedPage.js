import React from "react";
import List from "./FriendsList";
import FriendsListForm from "./FriendsListForm";


class ProtectedPage extends React.Component {
    render() {
    return (
      <div>
        <FriendsListForm/>
        <List/>
      </div>
    );
    }
  }

  export default ProtectedPage;
  