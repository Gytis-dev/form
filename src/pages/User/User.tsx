import { Card } from "components/Card/Card";
import { InfoContainer, Label } from "./UserStyle";
import { FieldContainer } from "pages/User/UserStyle";
import { useParams } from "react-router";
import { getUsers } from "service/users";
import { getValue } from "utils/getValue";

export const User = () => {
  const params = useParams();

  const user = () => {
    return getUsers().find((user: User) => user.id === params.id);
  };

  return (
    <Card title="User information">
      <InfoContainer>
        <FieldContainer>
          <Label>User ID</Label>
          <div>{getValue(user()?.id)}</div>
        </FieldContainer>

        <FieldContainer>
          <Label>Name</Label>
          <div>{getValue(user()?.name)}</div>
        </FieldContainer>

        <FieldContainer>
          <Label>Last name</Label>
          <div>{getValue(user()?.lastName)}</div>
        </FieldContainer>

        <FieldContainer>
          <Label>Email</Label>
          <div>{getValue(user()?.email)}</div>
        </FieldContainer>

        <FieldContainer>
          <Label>Phone</Label>
          <div>{getValue(user()?.phone)}</div>
        </FieldContainer>
      </InfoContainer>
    </Card>
  );
};
