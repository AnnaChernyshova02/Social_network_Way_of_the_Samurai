import { AppRootStateType } from "../Redux/redux-store";
import { initialStateType } from "../Redux/users-reducer";

export const usersSelector = (state: AppRootStateType): initialStateType => {
  return state.users;
};

export const pageSizeSelector = (state: AppRootStateType): number => {
  return state.users.pageSize;
};

export const totalUsersCountSelector = (state: AppRootStateType): number => {
  return state.users.totalUsersCount;
};

export const currentPageSelector = (state: AppRootStateType): number => {
  return state.users.currentPage;
};

export const isFetchingSelector = (state: AppRootStateType): boolean => {
  return state.users.isFetching;
};

export const followingInProgressSelector = (
  state: AppRootStateType
): number[] => {
  return state.users.followingInProgress;
};
