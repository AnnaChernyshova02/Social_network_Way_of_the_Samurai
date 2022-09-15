import { ThunkDispatch } from "redux-thunk";
import { authAPI, LoginParamsType, securityAPI } from "../api/api";
import { AppActionsType, AppStateType } from "./redux-store";
import { handleServerNetworkError } from "../utils/error-utils";
import { initializeApp, setAppStatus } from "./app-reducer";
import { AUTH } from "./Enum";

let initialState: AuthStateType = {
  id: 2,
  email: "blabla@bla.bla",
  login: "samurai",
  isAuth: false,
  captchaUrl: undefined,
};

export type AuthStateType = {
  id: number;
  email: string;
  login: string;
  isAuth: boolean;
  captchaUrl?: string | undefined;
};

export const authReducer = (
  state: AuthStateType = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case AUTH.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case AUTH.SET_LOGIN:
      return {
        ...state,
        isAuth: action.payload.value,
      };
    case AUTH.GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        captchaUrl: action.payload.url,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (
  id: number,
  login: string,
  email: string,
  captcha: string | undefined
) =>
  ({
    type: AUTH.SET_USER_DATA,
    payload: { id, login, email, captcha },
  } as const);

export const getCaptchaUrlSuccess = (url: string) =>
  ({
    type: AUTH.GET_CAPTCHA_URL_SUCCESS,
    payload: { url },
  } as const);

export const setLogin = (value: boolean) =>
  ({
    type: AUTH.SET_LOGIN,
    payload: { value },
  } as const);

export const login =
  (data: LoginParamsType) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await authAPI.login(data);
      if (response.data.resultCode === 0) {
        dispatch(setLogin(true));
        await dispatch(initializeApp());
        dispatch(setAppStatus("succeeded"));
      } else {
        await dispatch(getCaptchaUrl());
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

export const getCaptchaUrl =
  () =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await securityAPI.getCaptchaUrl();
      const captchaUrl = response.data.url;
      dispatch(getCaptchaUrlSuccess(captchaUrl));
      dispatch(setAppStatus("succeeded"));
    } catch (e) {
      dispatch(setAppStatus("failed"));
    }
  };

export type AuthActionsType =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setLogin>
  | ReturnType<typeof getCaptchaUrlSuccess>;
