import React, { useEffect } from "react";
import Profile, { ProfileType } from "./Profile";
import {
  getStatus,
  getUpdateStatus,
  getUserProfile,
  setUserProfile,
} from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hok/AuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hok/withRouter";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export class ProfileContainer extends React.Component<any, ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    console.log(userId);
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile />;
  }
}

type MapStatePropsType = {
  profile: ProfileType;
  status: string;
};

type MapDispatchPropsType = {
  setUserProfile: (profile: string) => void;
  getUserProfile: (id: string) => void;
  getStatus: (status: string) => void;
  getUpdateStatus: (status: string) => void;
};

export type ProfilePropsType = MapDispatchPropsType & MapStatePropsType;

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    getUpdateStatus,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer);
