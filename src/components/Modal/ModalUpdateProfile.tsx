import React from "react";
import { Modal } from "./Modal";
import Button from "@mui/material/Button";
import { ProfileDataForm } from "../Profile/ProfileInfo/ProfileDataForm";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAppDispatch, useAppSelector } from "../../Redux/redux-store";
import { saveEditProfileSuccess } from "../../Redux/profile-reducer";
import { SaveEditSelector } from "../../Selectors/profileSelector";

export const ModalUpdateProfile = () => {
  const saveEdit = useAppSelector(SaveEditSelector);
  const dispatch = useAppDispatch();

  const openModal = () => dispatch(saveEditProfileSuccess(true));
  const closeModal = () => dispatch(saveEditProfileSuccess(false));

  return (
    <>
      <Button
        color={"secondary"}
        variant="contained"
        size={"medium"}
        onClick={openModal}
      >
        Edit
      </Button>
      <Modal isModal={saveEdit}>
        <CancelIcon
          sx={{ marginLeft: "260px", cursor: "pointer" }}
          color={"secondary"}
          fontSize={"medium"}
          onClick={closeModal}
        />
        <ProfileDataForm />
      </Modal>
    </>
  );
};
