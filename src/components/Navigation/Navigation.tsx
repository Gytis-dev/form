import {
  MenuItemsContainer,
  StyledNavLink,
} from "components/Navigation/NavigationStyle";
import { routes } from "service/routes";

export const Navigation = () => {
  const menuItems = [
    { label: "Register user", path: routes.personalInformation },
    { label: "Users", path: routes.users },
  ];

  return (
    <MenuItemsContainer>
      {menuItems.map((item) => (
        <StyledNavLink key={item.label} to={item.path}>
          {item.label}
        </StyledNavLink>
      ))}
    </MenuItemsContainer>
  );
};
