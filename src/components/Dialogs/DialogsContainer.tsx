import React  from "react";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hok/AuthRedirect";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage
    }
}

export default connect(MapStateToProps)(withAuthRedirect(Dialogs));
