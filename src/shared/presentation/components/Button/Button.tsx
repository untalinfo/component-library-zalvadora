import React from "react";
import type { CustomButtonProps } from "./styles";
import StyledButton from "./styles";

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default CustomButton;
