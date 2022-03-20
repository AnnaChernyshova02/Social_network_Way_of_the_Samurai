import React, {Component} from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/png-clipart-computer-icons-user-membership-black-area.png"

export class Users extends Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={s.styles}>
            {this.props.usersPage.users.map(m => <div key={m.id}>
                <div>
                    <img className={s.photo} alt={'photos'} src={m.photos.small != null
                        ? m.photos.small
                        : userPhoto}/>
                </div>
                <div>
                    {m.followed
                        ? <button onClick={() => {
                            this.props.unfollow(m.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(m.id)
                        }}>Follow</button>}
                </div>
                <div>
                <span className={s.names}>
                    {m.name + ' ' + m.status}
                </span>
                    <span>
                    <div>{"m.location.country"}</div>
                    <div>{"m.location.city"}</div>
                </span>
                </div>
            </div>)}
        </div>;
    }
}

