import React from "react";
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {getUserProfile, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hok/AuthRedirect";


type mapStatePropsType = {
    profile: ProfileType
}

type mapDispatchPropsType = {
    setUserProfile: (profile: string) => void
    getUserProfile: (id: string) => void
}

export type ProfilePropsType = mapDispatchPropsType & mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export function withRouter(Component: any) {
    function ComponentWithRouterProp(props: ProfilePropsType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component<any, ProfilePropsType> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.router.params.userId

        this.props.getUserProfile(userId)
    }

    render() {
        //if(!this.props.auth) return <Navigate to={"/login"}/>

        return <Profile profile={this.props.profile}/>
    }
}


export default connect(mapStateToProps, {setUserProfile, getUserProfile})
(withAuthRedirect(withRouter(ProfileContainer)));


