import React from "react";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";
import {addMessageAction, DialogsStateType} from "../../../Redux/dialogs-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(addMessageAction(newMessage))
        },
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

type MapStatePropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchPropsType = {
    addMessage: (newMessage: string)=> void
}

export type DialogsType =  MapDispatchPropsType & MapStatePropsType

export default AddMessageContainer;

