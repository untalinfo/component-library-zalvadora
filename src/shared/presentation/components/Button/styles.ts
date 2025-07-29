import { styled } from "@mui/material/styles";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";

const StyledButton = styled(MuiButton)<MuiButtonProps>(() => ({
  // backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",

  "&:hover": {
    backgroundColor: "#006400",
  },
}));

export type CustomButtonProps = MuiButtonProps;

export default StyledButton;