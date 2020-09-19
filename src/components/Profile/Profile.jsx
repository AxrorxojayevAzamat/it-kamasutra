import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({profile, updateStatus, status}) => {
    if (!profile) return <Preloader/>
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;