import React from "react";
import Preloader from "../common/Preloader/Preloader";
import User from "./User";
import Paginator from "./Paginator";

const Users = ({users, followingProgress, follow, unfollow, ...props}) => {
    return (
        <div>
            <Paginator {...props}/>
            {props.isFetching && <Preloader/>}
            <User users={users} followingProgress={followingProgress} follow={follow} unfollow={unfollow}/>
        </div>)
}

export default Users;