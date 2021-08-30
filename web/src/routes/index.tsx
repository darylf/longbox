import React from "react";
import { useRoutes } from "react-router-dom";
import SidebarWithHeader from "../components/layout";
import { Login } from "../features/auth/routes/Login";
import BrowseCollection from "../features/misc/explore";
import HomePage from "../features/misc/home";
import { useLoginState } from "../hooks/use-authentication";
import { lazyImport } from "../utils/lazyImport";
import AdminPage from "./admin";
import ListUsers from "./list-users";
import MyCollection from "./my-collection";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import Trending from "./trending";
import ViewBook from "./view-book";
import ViewCreator from "./view-creator";
import ViewSeries from "./view-series";
import ViewUser from "./view-user";

const { PublishersRoutes } = lazyImport(
  () => import("../features/publishers"),
  "PublishersRoutes"
);

export const AppRoutes = () => {
  const { authenticated } = useLoginState();

  const commonRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "/admin", element: <AdminPage /> },
    { path: "/comics/:id", element: <ViewBook /> },
    { path: "/creators/:id", element: <ViewCreator /> },
    { path: "/explore", element: <BrowseCollection /> },
    { path: "/login", element: <Login /> },
    { path: "/my-collection", element: <MyCollection /> },
    { path: "/publishers/*", element: <PublishersRoutes /> },
    { path: "/series/:id", element: <ViewSeries /> },
    { path: "/trending", element: <Trending /> },
    { path: "/users/:id", element: <ViewUser /> },
    { path: "/users", element: <ListUsers /> },
  ];

  const routes = authenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <SidebarWithHeader>{element}</SidebarWithHeader>;
};
