import React from "react";
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {getStatus, getUpdateStatus, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile />
  }
}

type MapStatePropsType = {
  profile: ProfileType
  status: string
}

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void

}

export type ProfilePropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
  setUserProfile, getStatus, getUpdateStatus
})(ProfileContainer))
