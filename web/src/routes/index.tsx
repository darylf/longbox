import React from "react";
import { useRoutes } from "react-router-dom";
import SidebarWithHeader from "../components/SidebarWithHeader";
import {
  Admin,
  Dashboard,
  Explore,
  MyCollection,
  Trending,
} from "../features/misc";
import { useLoginState } from "../hooks/useAuthentication";
import lazyImport from "../utils/lazyImport";
import protectedRoutes from "./protected";
import publicRoutes from "./public";

const { BooksRoutes } = lazyImport(
  () => import("../features/books"),
  "BooksRoutes"
);

const { CreatorsRoutes } = lazyImport(
  () => import("../features/creators"),
  "CreatorsRoutes"
);

const { PublishersRoutes } = lazyImport(
  () => import("../features/publishers"),
  "PublishersRoutes"
);

const { SeriesRoutes } = lazyImport(
  () => import("../features/series"),
  "SeriesRoutes"
);

const { UsersRoutes } = lazyImport(
  () => import("../features/users"),
  "UsersRoutes"
);

const AppRoutes = () => {
  const { authenticated } = useLoginState();

  const commonRoutes = [
    { path: "/", element: <Dashboard /> },
    { path: "/admin", element: <Admin /> },
    { path: "/comics/*", element: <BooksRoutes /> },
    { path: "/creators/*", element: <CreatorsRoutes /> },
    { path: "/explore", element: <Explore /> },
    { path: "/my-collection", element: <MyCollection /> },
    { path: "/publishers/*", element: <PublishersRoutes /> },
    { path: "/series/*", element: <SeriesRoutes /> },
    { path: "/trending", element: <Trending /> },
    { path: "/users/*", element: <UsersRoutes /> },
  ];

  const routes = authenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <SidebarWithHeader>{element}</SidebarWithHeader>;
};

export default AppRoutes;
