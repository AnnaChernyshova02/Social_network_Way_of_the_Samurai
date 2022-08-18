import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {isAuthSelector} from "../Selectors/appSelector";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: isAuthSelector(state)
  }
}

type MapStatePropsType = {
  isAuth: boolean
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStatePropsType) => {

    let {isAuth, ...restProps} = props

    if (!isAuth) return <Navigate to={"/login"}/>;

    return <Component {...restProps as T}/>
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent;
};

