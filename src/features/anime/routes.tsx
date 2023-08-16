import { Navigate, type RouteObject } from 'react-router-dom';

import { AnimePage } from '@/features/anime/pages/AnimePage.tsx';
import { BlankPage } from '@/features/anime/pages/BlankPage.tsx';
import { ProducersPage } from '@/features/anime/pages/ProducersPage.tsx';

export const animeRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <ProducersPage />,
        path: 'producers',
      },
      {
        element: <BlankPage />,
        path: 'blank',
      },
      {
        element: <Navigate to="blank" />,
        path: '',
      },
    ],
    element: <AnimePage />,
    path: ':id',
  },
];
