import { CharactersPage } from './pages/CharactersPage.tsx';
import { type RouteObject } from 'react-router-dom';

import { CharacterPage } from '@/features/character/pages/CharacterPage.tsx';

export const characterRoutes: RouteObject[] = [
  {
    element: <CharactersPage />,
    path: '',
  },
  {
    element: <CharacterPage />,
    path: ':id',
  },
];
