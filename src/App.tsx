import { Route, Routes } from "react-router";
import { routes } from "service/routes";
import { PersonalInformation } from "pages/PersonalInformation/PersonalInformation";
import { ContactInformation } from "pages/ContactInformation/ContactInformation";
import { RegisteredUsers } from "pages/RegisteredUsers/RegisteredUsers";
import { Navigation } from "components/Navigation/Navigation";
import { User } from "pages/User/User";
import { MainLayout } from "layouts/MainLayout";

export const App = () => {
  return (
    <MainLayout>
      <Navigation />
      <Routes>
        <Route
          path={routes.personalInformation}
          element={<PersonalInformation />}
        />
        <Route
          path={routes.contactInformation}
          element={<ContactInformation />}
        />
        <Route path={routes.users} element={<RegisteredUsers />} />
        <Route path={routes.user} element={<User />} />
      </Routes>
    </MainLayout>
  );
};
