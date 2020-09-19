import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateInput = () => {
        setEditMode(true)
    }
    let deactivateInput = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let changeStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateInput}>{props.status || "---No status!!!---"}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={changeStatus} autoFocus={true} onBlur={deactivateInput} value={status} type="text"/>
            </div>}
        </>
    );

}

export default ProfileStatusWithHook;