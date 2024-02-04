import styled from "styled-components";
import { colors } from "styles/colors";

export const InputContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${colors.black};
`;

export const Error = styled.div`
  color: ${colors.error};
  margin-top: 5px;
`;
