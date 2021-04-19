import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const Surface = styled.div`
  background-color: #eee;
  border-radius: 5px;
  padding: 0.5em 1.2em;
  margin-bottom: 1.2em;

  ul > li {
    list-style-type: none;
  }
`;

const ListFooter = styled.div`
  margin-top: 0.8em;
`;

interface Item {
  id: string;
  name: string;
}

interface ListProps<T extends Item> {
  title?: string;
  linkTo: string;
  seriesId?: string;
  list: Array<T> | null | undefined;
  titleLink?: string;
}

export default function ItemList<T extends Item>({
  title = 'List',
  linkTo,
  list,
  seriesId,
  titleLink
}: ListProps<T>): JSX.Element {
  if (!linkTo.includes(':id')) throw new Error('linkTo is missing :id');

  const viewList =
    list && list.length > 0 ? (
      <ul>
        {list.map(({ id, name }) => (
          <li key={id}>
            <Link to={linkTo.replace(':id', id)}>
              {/* <img src="https://via.placeholder.com/276x424" />
              <br /> */}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>
        <em>No books have been added.</em>
      </p>
    );
  return (
    <Surface>
      <h2>{title}</h2>
      {viewList}
      <ListFooter>
        {titleLink && (
          <>
            <Link to={titleLink}>View More</Link>
            <br />
          </>
        )}
        <Link to={`/series/${seriesId}/create`}>
          <Icon name={'plus'} /> Add book
        </Link>
      </ListFooter>
    </Surface>
  );
}
