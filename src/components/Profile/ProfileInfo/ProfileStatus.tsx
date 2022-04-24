import React, {useState} from "react";

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = ({status}: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{status}</span>
        </div>}
        {editMode &&
        <div>
            <input autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        </div>}
    </div>
}
