import React, { Suspense } from "react";
import "./App.scss";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Error404 } from "./components/404_Error/Error_404";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainerFunc2").then(
    ({ ProfileContainer }) => ({ default: ProfileContainer })
  )
);

export const RoutesApp = () => {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper-content">
      <Suspense fallback={<span>Loading...</span>}>
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
      </Suspense>
    </div>
  );
};
