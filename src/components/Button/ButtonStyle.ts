import styled from "styled-components";
import { colors } from "styles/colors";

interface ButtonProps {
  disabled: boolean;
  buttonPrimary?: boolean;
}

export const PrimaryButton = styled.button<ButtonProps>`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background: ${({ disabled }) =>
    disabled ? colors.secondary : colors.primary};
  color: ${({ disabled }) => (disabled ? colors.black : colors.white)};
  outline: none;
  min-width: 125px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ disabled }) => !disabled && colors.secondary};
    color: ${colors.black};
    transition: 0.2s ease-in-out;
  }
`;

export const SecondaryButton = styled.button<ButtonProps>`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background: transparent;
  outline: none;
  min-width: 125px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ disabled }) => !disabled && colors.secondary};
    color: ${colors.black};
    transition: 0.2s ease-in-out;
  }
`;
