import { ThunkDispatch } from "redux-thunk";
import { authAPI, LoginParamsType } from "../api/api";
import { AppActionsType, AppStateType } from "./redux-store";
import { handleServerNetworkError } from "../utils/error-utils";
import { setAppStatus } from "./app-reducer";

let initialState: AuthStateType = {
  id: 2,
  email: "blabla@bla.bla",
  login: "samurai",
  isAuth: false,
};

export type AuthStateType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
};

export const authReducer = (
  state: AuthStateType = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case "auth/SET_USER_DATA":
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case "auth/SET_LOGIN":
      return {
        ...state,
        isAuth: action.value,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id: number, login: string, email: string) =>
  ({
    type: "auth/SET_USER_DATA",
    data: { id, login, email },
  } as const);

export const setLogin = (value: boolean) =>
  ({
    type: "auth/SET_LOGIN",
    value,
  } as const);

export const login =
  (data: LoginParamsType) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await authAPI.login(data);
      if (response.data.resultCode === 0) {
        dispatch(setLogin(true));
        dispatch(setAppStatus("succeeded"));
      }
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

export const logOut =
  () =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await authAPI.logout();
      if (response.data.resultCode === 0) {
        dispatch(setLogin(false));
        dispatch(setAppStatus("succeeded"));
      }
    } catch (e) {
      dispatch(setAppStatus("failed"));
    }
  };

export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setLogin>;
