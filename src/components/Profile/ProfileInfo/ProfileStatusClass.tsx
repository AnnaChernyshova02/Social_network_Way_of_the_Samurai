import React, {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {getUpdateStatus} from "../../../Redux/profile-reducer";

export class ProfileStatusClass extends React.Component<any, any> {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return <div>
      {!this.state.editMode &&
        <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}
                          style={{color: "black", fontSize: "30px"}}>{this.props.status}</span>
        </div>}
      {this.state.editMode &&
        <div>
          <input autoFocus={true}
                 onBlur={this.deactivateEditMode.bind(this)}
                 value={this.props.status}
                 style={{fontSize: "25px"}}/>
        </div>}
    </div>
  }
}
