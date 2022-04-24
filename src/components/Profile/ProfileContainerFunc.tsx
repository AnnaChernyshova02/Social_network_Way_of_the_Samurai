import React from "react";
import Profile, {ProfileType} from "./Profile";
import {getUserProfile, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hok/AuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hok/withRouter";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

class ProfileContainer extends React.Component<any, ProfilePropsType> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.router.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: string) => void
    getUserProfile: (id: string) => void
}

export type ProfilePropsType = MapDispatchPropsType & MapStatePropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)




