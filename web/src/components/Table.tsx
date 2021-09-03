import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";

export type Column<T> = {
  position?: number;
  key: keyof T;
  label: string;
  render?: (item: T) => ReactElement;
};

const renderColumn = <T extends unknown>(
  item: T,
  column: Column<T>
): ReactElement => {
  if (column.render === undefined) return <>{item[column.key]}</>;
  return column.render(item);
};

interface TableProps<T> {
  items: Array<T>;
  columns: Array<Column<T>>;
}

const nvl = (value: number | null | undefined): number => value ?? 0;

export const Table = <T extends unknown>({
  items,
  columns: columnDefs,
}: TableProps<T>): ReactElement => {
  const columns = columnDefs.sort((a, b) =>
    nvl(a.position) > nvl(b.position) ? 1 : -1
  );
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {columns.map((c) => (
            <Th key={`${c.key}`}>{c.label}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {
          /* eslint-disable react/no-array-index-key */
          items.map((item, k) => (
            <Tr key={k}>
              {columns.map((c) => (
                <Td key={`${c.key}`}>{renderColumn(item, c)}</Td>
              ))}
            </Tr>
          )) /* eslint-enable react/no-array-index-key */
        }
      </Tbody>
    </ChakraTable>
  );
};
