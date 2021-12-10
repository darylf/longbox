import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { nvl } from "../utils/nvl";

export type Column<T> = {
  position?: number;
  key: keyof T;
  label: string;
  render?: (item: T) => ReactElement;
  uniqueKey?: string;
};

const renderColumn = <T extends unknown>(
  item: T,
  column: Column<T>
): ReactElement => {
  /* eslint-disable react/jsx-no-useless-fragment */
  if (column.render === undefined) return <>{item[column.key]}</>;
  /* eslint-enable react/jsx-no-useless-fragment */
  return column.render(item);
};

interface TableProps<T> {
  items: Array<T> | null | undefined;
  columns: Array<Column<T>>;
}

export const Table = function <T extends unknown>({
  items,
  columns: columnDefs,
}: TableProps<T>): ReactElement {
  const columns = columnDefs.sort((a, b) =>
    nvl(a.position) > nvl(b.position) ? 1 : -1
  );
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          {columns.map((c) => (
            <Th key={`${c.key}-${c.uniqueKey}`}>{c.label}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {items && items.length > 0 ? (
          /* eslint-disable react/no-array-index-key */
          items.map((item, k) => (
            <Tr key={k}>
              {columns.map((c) => (
                <Td key={`${c.key}-${c.uniqueKey}`}>{renderColumn(item, c)}</Td>
              ))}
            </Tr>
          )) /* eslint-enable react/no-array-index-key */
        ) : (
          <Tr>
            <Td colSpan={columns.length} textAlign="center" fontSize="sm">
              <em>No items to display</em>
            </Td>
          </Tr>
        )}
      </Tbody>
    </ChakraTable>
  );
};
