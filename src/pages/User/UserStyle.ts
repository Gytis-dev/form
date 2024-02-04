import styled from "styled-components";
import { colors } from "styles/colors";

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${colors.black};
`;
