import React from "react";
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


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

class ProfileContainer extends React.Component<ProfilePropsType> {


    componentDidMount() {
        console.log(this.props)
        // @ts-ignore
        let userId = this.props.router.params.userId
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));


