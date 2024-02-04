import { getUsers } from "service/users";
import { Table } from "components/Table/Table";
import { TableRows } from "types/TableRows";
import { HeaderRows } from "types/TableHeaderRows";
import { Card } from "components/Card/Card";
import { Link } from "react-router-dom";
import { routes } from "service/routes";
import { getValue } from "utils/getValue";

export const RegisteredUsers = () => {
  const headerRows = (): HeaderRows[] => {
    return [
      { key: "userId", content: "User ID" },
      { key: "name", content: "Name" },
      { key: "lastName", content: "Last Name" },
      { key: "email", content: "Email" },
      { key: "phone", content: "Phone number" },
    ];
  };

  const rows = (): TableRows[] => {
    return getUsers().map((user) => ({
      key: user.id,
      rows: [
        {
          content: (
            <Link to={routes.user.replace(":id", user.id)}>{user.id}</Link>
          ),
        },
        { content: getValue(user.name) },
        { content: getValue(user.lastName) },
        { content: getValue(user.email) },
        { content: getValue(user.phone) },
      ],
    }));
  };

  return (
    <Card title={"Users"}>
      <Table headerRows={headerRows()} tableRows={rows()} />
    </Card>
  );
};
