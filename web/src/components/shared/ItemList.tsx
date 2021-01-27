import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Surface = styled.div`
  background-color: #eee;
  border-radius: 5px;
  padding: 0.5em 1.2em;
  margin-bottom: 1.2em;

  h2 {
    font-size: 1.2rem;
  }

  ul > li {
    list-style-type: none;
  }
`;

interface Item {
  id: string;
  name: string;
}

interface ListProps<T extends Item> {
  title?: string;
  linkTo: string;
  list: Array<T> | null | undefined;
}

export default function ItemList<T extends Item>({
  title = 'List',
  linkTo,
  list
}: ListProps<T>): JSX.Element {
  if (!linkTo.includes(':id')) throw new Error('linkTo is missing :id');

  return list && list.length > 0 ? (
    <Surface>
      <h2>{title}</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={linkTo.replace(':id', item.id)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Surface>
  ) : (
    <></>
  );
}
