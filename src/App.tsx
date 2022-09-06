import React, { Suspense, useEffect } from "react";
import "./App.scss";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import UserContainer from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainerFunc2";
import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { useAppDispatch, useAppSelector } from "./Redux/redux-store";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { initializeApp } from "./Redux/app-reducer";
import {
  isAuthSelector,
  isInitializedSelector,
  statusSelector,
} from "./Selectors/appSelector";
import { Error404 } from "./components/404_Error/Error_404";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  const isInitialized = useAppSelector(isInitializedSelector);
  const status = useAppSelector(statusSelector);
  const isAuth = useAppSelector(isAuthSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!isInitialized) {
    return (
      <div
        style={{
          position: "fixed",
          top: "30%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="backgr">
      <div className={isAuth ? "app-wrapper" : "notLogin"}>
        {isAuth && (
          <>
            <HeaderContainer />
            <Navbar />
          </>
        )}
        {status === "loading" && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        <div className="app-wrapper-content">
          <Routes>
            <Route index element={() => navigate("/login")} />
            {/* index => path='/' */}
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UserContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
