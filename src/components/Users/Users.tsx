import React from "react";
import s from "./Users.module.scss";
import { initialStateType } from "../../Redux/users-reducer";
import { Box } from "@mui/system";
import Paginator from "../../common/Paginator";
import { User } from "./User";

const Users = ({
  usersPage,
  onPageChanged,
  following,
  unfollowing,
}: UsersType) => {
  return (
    <div className={s.styles}>
      <Paginator onPageChanged={onPageChanged} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          mx: "2px",
        }}
      >
        {usersPage.users.map((user) => (
          <User
            key={user.id}
            user={user}
            following={following}
            unfollowing={unfollowing}
          />
        ))}
      </Box>
    </div>
  );
};

type UsersType = {
  onPageChanged: (pageNumber: number) => void;
  usersPage: initialStateType;
  following: (id: number) => void;
  unfollowing: (id: number) => void;
};

export default Users;
