import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {
    let state = props.store.getState();
    return <Friends friends={state.sidebar.friends} />;
}

export default FriendsContainer;