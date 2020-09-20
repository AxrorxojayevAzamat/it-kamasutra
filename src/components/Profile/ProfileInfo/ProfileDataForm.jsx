import React from 'react';

import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormControl/FormControl";
import {required} from "../../../utils/validations/validate";

const ProfileForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div><button >Save</button></div>
        <b>Fullname:</b>
        {createField("Fullname", "fullName", Input, [required])}
        <b>About me:</b>
        {createField("About me", "aboutMe", Textarea, [required])}
        <br/>
        {createField(null, "lookingForAJob", Input, [], {type: "checkbox", text: "looking for a job"})}
        <br/>
        <b>Looking for a job description: </b>
        {createField("looking for a job description", "lookingForAJobDescription", Textarea, [required])}
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'profileForm'})(ProfileForm)

const ProfileDataForm = (props) => {
    return <ProfileDataReduxForm {...props} />
}

export default ProfileDataForm;