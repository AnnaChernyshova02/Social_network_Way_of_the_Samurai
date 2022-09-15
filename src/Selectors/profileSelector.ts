import { AppRootStateType } from "../Redux/redux-store";
import { ContactsType, ProfileType } from "../components/Profile/Profile";
import { ProfileStateType } from "../Redux/profile-reducer";

export const profilePageSelector = (
  state: AppRootStateType
): ProfileStateType => {
  return state.profilePage;
};

export const profileSelector = (state: AppRootStateType): ProfileType => {
  return state.profilePage.profile;
};

export const contactsSelector = (state: AppRootStateType): ContactsType => {
  return state.profilePage.profile?.contacts;
};

export const profileStatusSelector = (state: AppRootStateType): string => {
  return state.profilePage.status;
};

export const profileImageSelector = (
  state: AppRootStateType
): string | undefined => {
  return state.profilePage.profile?.photos?.large;
};
export const SaveEditSelector = (
  state: AppRootStateType
): boolean | undefined => {
  return state.profilePage.save;
};
