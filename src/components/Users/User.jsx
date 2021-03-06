import React from "react";
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.png"

const User = ({users, followingProgress, follow, unfollow}) => {
    return users.map(u => <div key={u.id}>
            <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small || avatar}
                     className={styles.userPhoto} alt='alt'/>
            </NavLink>
            <div>
                {u.followed
                    ? <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                        unfollow(u.id)
                    }}>Unfollow</button>
                    : <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                        follow(u.id)
                    }}>Follow</button>}
            </div>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
        </div>
    )


}

export default User;