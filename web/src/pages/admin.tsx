import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const AdminPage = (): ReactElement => {
  return (
    <div>
      <h1>Admin</h1>
      <ul>
        <li>
          <Link to="/publishers/new">Create Publisher</Link>
        </li>
        <li>
          <Link to="/series/new">Create Series</Link>
        </li>
        <li>
          <Link to="/books/new">Create Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
