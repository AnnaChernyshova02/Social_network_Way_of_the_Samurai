import React, {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {getUpdateStatus} from "../../../Redux/profile-reducer";
import {profileStatusSelector} from "../../../Selectors/profileSelector";

export const ProfileStatus = () => {

  let status = useAppSelector(profileStatusSelector)
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)
  const [state, setState] = useState(status)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    if (state !== status) {
      dispatch(getUpdateStatus(state))
    }
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
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
               value={state}
               style={{fontSize: "25px"}}/>
      </div>}
  </div>
}
