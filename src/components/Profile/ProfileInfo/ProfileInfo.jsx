import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import avatar from "../../../assets/images/avatar.png"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, owner, updateMainPhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    const updatePhoto = (e) => {
        if (e.target.files.length) {
            updateMainPhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || avatar} alt="" className={s.avatar}/>
                {owner && <input onChange={updatePhoto} type="file"/>}
                <pre>
                    { editMode
                        ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} />
                        : <ProfileData profile={profile} changeEditMode={() => setEditMode(true)} owner={owner} />}
                    <br/>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </pre>
            </div>
        </div>
    );
}

const Contact = ({contactKey, contactValue}) => <div className={s.contact}>
    <i>{contactKey}:</i> <a href={contactValue}>{contactValue}</a>
</div>

const ProfileData = ({profile, changeEditMode, owner}) => {
    return <div>
        <div>
            {owner && <button onClick={changeEditMode}>Edit</button> }
        </div>
        <div>
            <b>fullName: </b> {profile.fullName}
        </div>
        <div>
            <b>aboutMe: </b>{profile.aboutMe}
        </div>
        <div>
            <b>lookingForAJob: </b>{profile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
            <b>lookingForAJobDescription: </b>{profile.lookingForAJobDescription}
        </div>
        <div>
            <b>contacts: </b>
            {Object.keys(profile.contacts).map(key => <Contact key={key} contactKey={key}
                                                               contactValue={profile.contacts[key]}/>)}
        </div>
    </div>
}


export default ProfileInfo;