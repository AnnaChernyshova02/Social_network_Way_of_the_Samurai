import React from "react";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hok/AuthRedirect";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage
    }
}

export default compose<React.ComponentType>(connect(MapStateToProps), withAuthRedirect)(Dialogs)

