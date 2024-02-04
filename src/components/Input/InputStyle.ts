import styled from "styled-components";
import { colors } from "styles/colors";

export const InputContainer = styled.input<{ error: boolean }>`
  padding: 12px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ error }) => (error ? colors.error : colors.black)};
  width: 100%;
`;
