import { usersAPI } from "../api/api";
import { setAppStatus } from "./app-reducer";
import { handleServerNetworkError } from "../utils/error-utils";
import { ThunkDispatch } from "redux-thunk";
import { AppActionsType, AppStateType } from "./redux-store";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING_IN_PROGRESS";

let initialState: initialStateType = {
  users: [],
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const usersReducer = (
  state: initialStateType = initialState,
  action: UsersActionsType
): initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((m) =>
          m.id === action.userID ? { ...m, followed: true } : m
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((m) =>
          m.id === action.userID ? { ...m, followed: false } : m
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((id) => id != action.id)],
      };
    default:
      return state;
  }
};

export const follow = (userID: number) => ({ type: FOLLOW, userID } as const);
export const unfollow = (userID: number) =>
  ({ type: UNFOLLOW, userID } as const);
export const setUsers = (users: UserType[]) =>
  ({ type: SET_USERS, users } as const);
export const setCurrentPage = (currentPage: number) =>
  ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const setTotalUsersCount = (count: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, count } as const);
export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleIsFollowingProgress = (id: number, isFetching: boolean) =>
  ({
    type: FOLLOWING_IN_PROGRESS,
    id,
    isFetching,
  } as const);

export const getUsers =
  (currentPage: number, pageSize: number) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    dispatch(setAppStatus("loading"));
    try {
      const response = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
      dispatch(setAppStatus("succeeded"));
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

const followUnfollowFlow = async (
  dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>,
  userId: number,
  apiMethod: Promise<any>,
  actionCreator: UsersActionsType
) => {
  dispatch(toggleIsFollowingProgress(userId, true));
  dispatch(setAppStatus("loading"));
  try {
    const res = await apiMethod;
    if (res.resultCode === 0) {
      dispatch(actionCreator);
    }
    dispatch(toggleIsFollowingProgress(userId, false));
  } catch (error: any) {
    handleServerNetworkError(error, dispatch);
    dispatch(setAppStatus("failed"));
  } finally {
    dispatch(setAppStatus("idle"));
  }
};

export const following =
  (id: number) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    let apiMethod = await usersAPI.postFollow(id);
    let actionCreator = follow(id);
    return followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };

export const unfollowing =
  (id: number) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    let apiMethod = await usersAPI.deleteFollow(id);
    let actionCreator = unfollow(id);
    return followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };

export type UserType = {
  id: number;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
  name: string;
  status: string;
  location: {
    city: string;
    country: string;
  };
};

export type initialStateType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

export type UsersActionsType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingProgress>;
