import React from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('../views/Home'));
const About = React.lazy(() => import('../views/Home/c-pages/About'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      // 打开 /home 默认就展示 home的子路由 /about 的内容
      {
        path: '/home',
        element: <Navigate to="/home/about" />
      },
      {
        path: '/home/about',
        element: <About />
      }
    ]
  },
]

export default routes;

