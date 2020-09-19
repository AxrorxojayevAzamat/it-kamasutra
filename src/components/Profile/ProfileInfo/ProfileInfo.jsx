import React from 'react';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus}) => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <pre>
                    <strong>Fullname: </strong> {profile.fullName}
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </pre>
            </div>
        </div>
    );
}

export default ProfileInfo;