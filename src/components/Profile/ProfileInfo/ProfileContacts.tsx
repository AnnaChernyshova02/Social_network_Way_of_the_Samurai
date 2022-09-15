import React from "react";
import { useAppSelector } from "../../../Redux/redux-store";
import { profileSelector } from "../../../Selectors/profileSelector";

export const ProfileContacts = () => {
  const profile = useAppSelector(profileSelector);
  console.log(profile);

  if (profile?.contacts !== null) {
    const contact = Object.keys(profile?.contacts).map((key) => (
      <div key={key}>
        {key} :{" "}
        {profile?.contacts[key] === ""
          ? "No data available"
          : profile?.contacts[key]}
      </div>
    ));
    return <div>My Contacts : {contact}</div>;
  }
  return <div>Нет данных</div>;
};
