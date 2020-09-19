import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    const friendsElements = props.friends.map( friend => <Friend name={friend.name} avatar={friend.avatar}/> )
    return <div>{friendsElements}</div>;
}

export default Friends;