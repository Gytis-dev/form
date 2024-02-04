import styled from "styled-components";
import { colors } from "styles/colors";

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;

  &:nth-child(even) {
    background: ${colors.secondary};
  }

  &:hover {
    background: ${colors.darkGrey};
  }
`;
