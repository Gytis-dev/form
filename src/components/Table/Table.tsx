import { TableContainer, Td, Th, Tr } from "components/Table/TableStyle";
import { HeaderRows } from "types/TableHeaderRows";
import { TableRows } from "types/TableRows";
import { v4 } from "uuid";

interface Props {
  headerRows: HeaderRows[];
  tableRows: TableRows[];
}

export const Table: React.FC<Props> = ({ headerRows, tableRows }) => {
  const rows = () => {
    return tableRows.map(({ rows }) => (
      <Tr key={v4()}>
        {rows.map((item) => (
          <Td key={v4()}>{item.content}</Td>
        ))}
      </Tr>
    ));
  };

  return (
    <TableContainer>
      <thead>
        <Tr>
          {headerRows.map(({ content, key }) => (
            <Th align="left" key={key}>
              {content}
            </Th>
          ))}
        </Tr>
      </thead>

      {tableRows.length > 0 ? <tbody>{rows()}</tbody> : null}
    </TableContainer>
  );
};
