import React, {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {getUpdateStatus} from "../../../Redux/profile-reducer";
import {profileStatusSelector} from "../../../Selectors/profileSelector";

export const ProfileStatus = () => {

  let status = useAppSelector(profileStatusSelector)
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)
  const [profileStatus, setProfileStatus] = useState(status)

  useEffect(() => {
    setProfileStatus(status)
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    if (profileStatus !== status) {
      dispatch(getUpdateStatus(profileStatus))
    }
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileStatus(e.currentTarget.value)
  }

  return <div>
    {!editMode &&
       <div>
        <span onDoubleClick={activateEditMode}
              style={{color: "black", fontSize: "30px"}}>{status}
        </span>
       </div>}
    {editMode &&
       <div>
         <input onChange={onStatusChange}
                autoFocus
                onBlur={deactivateEditMode}
                value={profileStatus}
                style={{fontSize: "25px"}}/>
       </div>}
  </div>
}
