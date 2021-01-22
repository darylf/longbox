import * as React from 'react';
import { Link } from 'react-router-dom';

interface Item {
  id: string;
  name: string;
}

interface ListProps<T extends Item> {
  linkTo: string;
  list: Array<T> | null | undefined;
}

export default function ItemList<T extends Item>({
  linkTo,
  list
}: ListProps<T>): JSX.Element {
  if (!linkTo.includes(':id')) throw new Error('linkTo is missing :id');

  return list && list.length > 0 ? (
    <>
      <h2>List</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={linkTo.replace(':id', item.id)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <></>
  );
}
