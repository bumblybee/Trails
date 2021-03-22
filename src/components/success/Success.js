import React, { useContext } from "react";
import { SuccessContext } from "../../context/success/SuccessContext";
import { StyledNotificationPopup } from "../../styles/GlobalStyledComponents";

const Success = () => {
  const { successMessage } = useContext(SuccessContext);

  return (
    successMessage !== null && (
      <StyledNotificationPopup origin={"success"} draggable>
        {successMessage}
      </StyledNotificationPopup>
    )
  );
};

export default Success;
