import React from "react";
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

type mapStatePropsType = {
    profile: ProfileType
}

type mapDispatchPropsType = {
    setUserProfile: (profile: string) => void
}

export type ProfilePropsType = mapDispatchPropsType & mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)
