import React, { Component } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getCaptchaUrl, setAuthUserData } from "../../Redux/auth-reducer";
import Header from "./Header";
import { initializeApp } from "../../Redux/app-reducer";

class HeaderContainer extends Component<HeaderPropsType> {
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

type MapStatePropsType = {
  login: string;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  setAuthUserData: (
    id: number,
    login: string,
    email: string,
    CaptchaUrl: string | undefined
  ) => void;
  initializeApp: () => void;
};

type HeaderPropsType = MapDispatchPropsType & MapStatePropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
  initializeApp,
  getCaptchaUrl,
})(HeaderContainer);
