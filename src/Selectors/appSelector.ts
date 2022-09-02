import { AppRootStateType } from "../Redux/redux-store";

export const statusSelector = (state: AppRootStateType): string => {
  return state.app.status;
};

export const isAuthSelector = (state: AppRootStateType): boolean => {
  return state.auth.isAuth;
};

export const isInitializedSelector = (state: AppRootStateType): boolean => {
  return state.app.isInitialized;
};
