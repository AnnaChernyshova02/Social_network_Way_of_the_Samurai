import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../Redux/redux-store";
import { logOut } from "../../Redux/auth-reducer";
import LogoutIcon from "@mui/icons-material/Logout";

type HeaderType = {
  login: string;
  isAuth: boolean;
};

function Header(props: HeaderType) {
  const dispatch = useAppDispatch();

  const isLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header className={s.header}>
        <img
          alt={"Logo"}
          src="https://webstockreview.net/images/clipart-mountain-mountain-range-1.png"
        />
        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div style={{ marginTop: "5px", marginBottom: "5px" }}>
              <div>{props.login}</div>
              <div style={{ marginLeft: "70px" }}>
                <LogoutIcon
                  sx={{ cursor: "pointer" }}
                  fontSize="large"
                  onClick={isLogOut}
                />
              </div>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
