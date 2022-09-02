import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { ComponentType } from "react";
import { ProfilePropsType } from "../components/Profile/ProfileContainerFunc";

export function withRouter<T>(Component: ComponentType<T>) {
  function ComponentWithRouterProp(props: ProfilePropsType) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component {...(props as any)} router={{ location, navigate, params }} />
    );
  }

  return ComponentWithRouterProp;
}
