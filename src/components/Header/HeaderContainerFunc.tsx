import React, {Component, useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {AppStateType, store} from "../../Redux/redux-store";
import axios from "axios";
import {setAuthUserData} from "../../Redux/auth-reducer"
import Header from "./Header";
import {useParams} from "react-router-dom";

export const HeaderContainer = () => {

    let state = store.getState()

    //let {id, login, email} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} =response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }, [])


    return <Header isAuth={state.auth.isAuth} login={state.auth.login} />
}

// class HeaderContainer1 extends Component<HeaderPropsType> {
//
//     componentDidMount() {
//         debugger
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//                 withCredentials: true
//             })
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     let {id, login, email} = response.data.data
//                     this.props.setAuthUserData(id, login, email)
//                 }
//             })
//     }
//
//     render() {
//         return <Header isAuth={this.props.isAuth} login={this.props.login} />
//     }
// }
//
// type mapStatePropsType = {
//     login: string
//     isAuth: boolean
// }
//
// type mapDispatchPropsType = {
//     setAuthUserData: (id: number, login: string,  email: string) => void
// }
//
// type HeaderPropsType = mapDispatchPropsType & mapStatePropsType
//
// const mapStateToProps = (state: AppStateType): mapStatePropsType => {
//     return {
//         login: state.auth.login,
//         isAuth: state.auth.isAuth
//     }
// }
//
// export default connect(mapStateToProps, {
//     setAuthUserData
// })(HeaderContainer)
