import React, { ChangeEvent, FC, useState } from "react";
import { Modal } from "./Modal";
import Button from "@mui/material/Button";
import { ProfileDataForm } from "../Profile/ProfileInfo/ProfileDataForm";
import CancelIcon from "@mui/icons-material/Cancel";

type ModalAddCardPropsType = {
  addCard?: (title: string) => void;
};

export const ModalUpdateProfile: FC<ModalAddCardPropsType> = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const openModal = () => setIsModal(true);
  const closeModal = () => setIsModal(false);

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
      <Modal isModal={isModal}>
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
