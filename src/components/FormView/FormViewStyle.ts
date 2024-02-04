import styled from "styled-components";
import { colors } from "styles/colors";

export const Form = styled.form`
  display: flex;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const Error = styled.small`
  color: ${colors.error};
`;

export const ActionsContainer = styled.div<{ singleAction: boolean }>`
  display: flex;
  justify-content: ${({ singleAction }) =>
    singleAction ? "flex-end" : "space-between"};
`;
