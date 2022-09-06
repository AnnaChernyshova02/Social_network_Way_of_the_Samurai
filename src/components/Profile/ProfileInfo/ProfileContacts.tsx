import React from "react";
import { useAppSelector } from "../../../Redux/redux-store";
import { profileSelector } from "../../../Selectors/profileSelector";
import { ModalUpdateProfile } from "../../Modal/ModalUpdateProfile";

export const ProfileContacts = () => {
  const profile = useAppSelector(profileSelector);

  const contact = Object.keys(profile?.contacts).map((key) => (
    <div key={key}>
      {key} : {profile?.contacts[key] ?? "нет данных"}
    </div>
  ));

  return <div>My Contacts : {contact}</div>;
};
