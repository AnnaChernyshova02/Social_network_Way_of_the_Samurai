import { Dispatch } from "redux";
import {
  setAppError,
  SetAppErrorActionType,
  setAppStatus,
  SetAppStatusActionType,
} from "../Redux/app-reducer";
import { ResponseType } from "../api/api";

export const handleServerAppError = <D>(
  data: ResponseType<D>,
  dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>
) => {
  if (data.messages.length) {
    dispatch(setAppError(data.messages[0]));
  } else {
    dispatch(setAppError("Some error occurred"));
  }
  dispatch(setAppStatus("failed"));
};

export const handleServerNetworkError = (
  error: { message: string },
  dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>
) => {
  dispatch(setAppError(error.message ? error.message : "Some error occurred"));
  dispatch(setAppStatus("failed"));
};
