import React, {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {setAuthUserData} from "../../Redux/auth-reducer"
import Header from "./Header";

class HeaderContainer extends Component<HeaderPropsType> {

    componentDidMount() {
        debugger
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

type mapStatePropsType = {
    login: string
    isAuth: boolean
}

type mapDispatchPropsType = {
    setAuthUserData: (id: number, login: string,  email: string) => void
}

type HeaderPropsType = mapDispatchPropsType & mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)
