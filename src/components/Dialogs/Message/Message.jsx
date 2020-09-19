import React from "react";
import s from '../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.message}><pre>{props.message}</pre></div>
}


export default Message;