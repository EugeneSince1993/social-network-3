import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateStatus,
                       currentUserId, authorizedUserId, savePhoto}) => {

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          className={s.mainPhoto}
        />
        { currentUserId == authorizedUserId &&
            <input type={"file"} onChange={onMainPhotoSelected} /> }

        <div>
          <div>
            <b>Full name</b>: {profile.fullName}
          </div>
          <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
          </div>
          {
            profile.lookingForAJob &&
              <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
              </div>
          }
          <div>
            <b>About me</b>: {profile.aboutMe}
          </div>
          <div>
            <b>Contacts</b>: {profile.contacts}
          {/* 7.50 "Error: Objects are not valid as a React child..." */}
          </div>
        </div>

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
