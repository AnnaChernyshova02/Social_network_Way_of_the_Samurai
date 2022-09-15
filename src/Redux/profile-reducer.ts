import { v1 } from "uuid";
import {
  ProfileDescriptionType,
  ProfileType,
} from "../components/Profile/Profile";
import { profileAPI } from "../api/api";
import { AppActionsType, AppStateType, ThunkType } from "./redux-store";
import { setAppStatus } from "./app-reducer";
import { handleServerNetworkError } from "../utils/error-utils";
import { ThunkDispatch } from "redux-thunk";
import { PROFILE } from "./Enum";

let initialState: ProfileStateType = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likeCounts: 15 },
    { id: v1(), message: "It's my first post", likeCounts: 20 },
  ],
  profile: null,
  status: "",
  save: false,
};

const profileReducer = (
  state: ProfileStateType = initialState,
  action: ProfileActionsType
): ProfileStateType => {
  switch (action.type) {
    case PROFILE.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: v1(),
            message: action.message,
            likeCounts: 0,
          },
        ],
      };
    case PROFILE.SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case PROFILE.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case PROFILE.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != action.id),
      };
    case PROFILE.SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.file },
      };
    case PROFILE.SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
      };
    case PROFILE.SAVE_EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        save: action.save,
      };
    default:
      return state;
  }
};

export const addPost = (message: string) =>
  ({ type: PROFILE.ADD_POST, message } as const);
export const deletePost = (id: string) =>
  ({ type: PROFILE.DELETE_POST, id } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({ type: PROFILE.SET_USER_PROFILE, profile } as const);

export const setStatus = (status: string) =>
  ({
    type: PROFILE.SET_STATUS,
    status,
  } as const);

export const savePhotoSuccess = (file: any) =>
  ({
    type: PROFILE.SAVE_PHOTO_SUCCESS,
    file,
  } as const);

export const saveProfileSuccess = (profile: ProfileDescriptionType) =>
  ({
    type: PROFILE.SAVE_PROFILE_SUCCESS,
    profile,
  } as const);

export const saveEditProfileSuccess = (save: boolean) =>
  ({
    type: PROFILE.SAVE_EDIT_PROFILE_SUCCESS,
    save,
  } as const);

export const getUserProfile =
  (userId: string) =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
      dispatch(setAppStatus("succeeded"));
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

export const getStatus =
  (userId: string): ThunkType =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
      dispatch(setAppStatus("succeeded"));
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

export const getUpdateStatus =
  (status: string): ThunkType =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        dispatch(setAppStatus("succeeded"));
      }
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

export const savePhoto =
  (file: string): ThunkType =>
  async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
    dispatch(setAppStatus("loading"));
    try {
      const response = await profileAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(setAppStatus("succeeded"));
      }
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

export const saveProfile =
  (profile: ProfileDescriptionType): ThunkType =>
  async (
    dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>,
    getState
  ) => {
    dispatch(setAppStatus("loading"));
    const userID = getState().auth.id;
    try {
      const response = await profileAPI.saveProfile(profile);
      console.log(profile);
      if (response.data.resultCode === 0) {
        await dispatch(getUserProfile(userID.toString()));
        dispatch(setAppStatus("succeeded"));
      }
    } catch (error: any) {
      handleServerNetworkError(error, dispatch);
      dispatch(setAppStatus("failed"));
    } finally {
      dispatch(setAppStatus("idle"));
    }
  };

export type ProfileStateType = {
  posts: Array<PostPropsType>;
  profile: ProfileType;
  status: string;
  save?: boolean;
};

export type PostPropsType = {
  id: string;
  message: string;
  likeCounts: number;
};

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof deletePost>
  | ReturnType<typeof savePhotoSuccess>
  | ReturnType<typeof saveProfileSuccess>
  | ReturnType<typeof saveEditProfileSuccess>;

export default profileReducer;
