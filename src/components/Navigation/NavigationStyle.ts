import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: ${colors.primary};
  }
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  background: ${colors.white};
`;
