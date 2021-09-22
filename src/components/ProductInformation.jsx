import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#ffffff",
  borderRadius: '.25rem',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%)',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ProductInfomation({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-window">
      <div className="modal-window__button" onClick={handleOpen}>
        {children}
      </div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h3 className="modal-window__title" id="unstyled-modal-title">Product information</h3>
          <div className="modal-window__content">
            <div>
              <img width="115" height="115" src={props.imageUrl} alt="Sushi" />
            </div>
            <div>
              <h2>{props.name}</h2>
              <p>
                <b>Weight:</b> {props.weight} g
              </p>
              <p>
                <b>Proteins:</b> {props.proteins} g
              </p>
              <p>
                <b>Fats:</b> {props.fats} g
              </p>
              <p>
                <b>Carbohydrates:</b> {props.carbohydrates} g
              </p>
              <p>
                <b>Calories:</b> {props.calories} g
              </p>
              <h3>from {props.price}$</h3>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
