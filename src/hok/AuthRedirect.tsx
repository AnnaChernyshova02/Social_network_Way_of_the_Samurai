import React from 'react';
import {Navigate} from "react-router-dom";
import {ProfilePropsType} from "../components/Profile/ProfileContainerFunc";
import {AppActionsType, AppStateType} from "../Redux/redux-store";
import {ProfileType} from "../components/Profile/Profile";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

type mapStatePropsType = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: any) => {
    console.log("aaaa")

    class RedirectComponent extends React.Component<any, any> {

        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"}/>;

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
};

