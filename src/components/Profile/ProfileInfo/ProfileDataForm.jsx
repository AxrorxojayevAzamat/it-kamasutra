import React from 'react';

import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormControl/FormControl";
import {required} from "../../../utils/validations/validate";
import style from "../../common/FormControl/FormControl.module.css";

const ProfileForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button >Save</button></div>
        {error && <div className={style.formError}>
            {error}
        </div>}
        <b>Fullname:</b>
        {createField("Fullname", "fullName", Input, [required])}
        <b>About me:</b>
        {createField("About me", "aboutMe", Textarea, [required])}
        <br/>
        {createField(null, "lookingForAJob", Input, [], {type: "checkbox", text: "looking for a job"})}
        <br/>
        <b>Looking for a job description: </b>
        {createField("looking for a job description", "lookingForAJobDescription", Textarea, [required])}
        <div>
            <b>contacts: </b>
            {Object.keys(profile.contacts).map(key => <div key={key}>
                <b>{key}:</b>
                {createField(key, "contacts." + key, Input, [])}
            </div>)}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'profile-edit'})(ProfileForm)

const ProfileDataForm = (props) => {
    return <ProfileDataReduxForm {...props} />
}

export default ProfileDataForm;