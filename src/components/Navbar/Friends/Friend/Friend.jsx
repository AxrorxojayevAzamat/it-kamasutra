import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.avatar} alt=""/>
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;