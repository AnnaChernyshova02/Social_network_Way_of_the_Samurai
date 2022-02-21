import React from "react";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";
import {AchionsType, DialogsPropsType, RootStateType} from "../../../Redux/store";
import {addMessageAction, newMessageAction} from "../../../Redux/dialogs-reducer";

type mapStatePropsType = {
    dialogsPage: DialogsPropsType
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchPropsType = {
    addMessage: ()=> void
    updateNewMessageText: (message: string ) => void
}

const mapDispatchToProps = (dispatch: (action: AchionsType) => void):mapDispatchPropsType => {
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

