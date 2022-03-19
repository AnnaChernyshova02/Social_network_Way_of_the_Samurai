import React from "react";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";
import {addMessageAction, initialStateType, newMessageAction} from "../../../Redux/dialogs-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
    dialogsPage: initialStateType
}

type mapDispatchPropsType = {
    addMessage: ()=> void
    updateNewMessageText: (message: string ) => void
}

export type DialogsType =  mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAction())
        },
        updateNewMessageText: (message:string) => {
        dispatch(newMessageAction(message))}
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer;

