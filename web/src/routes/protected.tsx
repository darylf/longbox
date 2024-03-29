import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// const { DiscussionsRoutes } = lazyImport(
//   () => import('@/features/discussions'),
//   'DiscussionsRoutes'
// );
// const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');
// const { Profile } = lazyImport(() => import('@/features/users'), 'Profile');
// const { Users } = lazyImport(() => import('@/features/users'), 'Users');

const App = function () {
  return (
    // <MainLayout>
    <Outlet />
    // </MainLayout>
  );
};

const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      // { path: '/discussions/*', element: <DiscussionsRoutes /> },
      // { path: '/users', element: <Users /> },
      // { path: '/profile', element: <Profile /> },
      // { path: '/', element: <Dashboard /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];

export default protectedRoutes;
