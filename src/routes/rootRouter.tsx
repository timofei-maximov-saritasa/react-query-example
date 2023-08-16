import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { animeRoutes } from '@/features/anime/routes.tsx';
import { BaseLayout } from '@/layouts/BaseLayout.tsx';

import { characterRoutes } from '../features/character/routes.tsx';

const routes: RouteObject[] = [
  {
    children: [
      {
        children: [...characterRoutes],
        path: '/characters',
      },
      {
        children: [...animeRoutes],
        path: '/anime',
      },
    ],
    element: <BaseLayout />,
  },
];

export const rootRouter = createBrowserRouter(routes);
