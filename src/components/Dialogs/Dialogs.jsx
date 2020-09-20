import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControl/FormControl";
import {required} from "../../utils/validations/validate";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="dialogMessage" placeholder="Enter the message" component={Textarea}
                validate={[required]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: "dialogsMessages"})(DialogsForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d, index) => <DialogItem key={index} name={d.name} id={d.id}/>)
    let messsagesElements = props.dialogsPage.messages.map((m, index) => <Message key={index} message={m.message}/>)

    let onSendMessageClick = (values) => {
        props.sendMessage(values.dialogMessage);
        values.dialogMessage = ""
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messsagesElements}
                <DialogsReduxForm onSubmit={onSendMessageClick} />
            </div>
        </div>
    );
}

export default Dialogs;