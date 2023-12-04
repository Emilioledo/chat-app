import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { hideErrorModal } from "../../redux/commonComponents";

export const ErrorModal: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(
    (state: RootState) => state.commonComponents.errorModal
  );

  const handleClose = () => dispatch(hideErrorModal());
  return (
    <Modal show={error.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{error.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error.message}</Modal.Body>
    </Modal>
  );
};
