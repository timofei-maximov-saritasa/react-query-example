import { NavLink, Outlet, useParams } from 'react-router-dom';

import { useAnime } from '@/features/anime/queries/useAnime.ts';

export const AnimePage = () => {
  const { id } = useParams<{ id: string; }>();
  const { data, error, isLoading } = useAnime(id);

  if (error) {
    return (
      <div>
        ERROR
      </div>
    );
  }

  if (isLoading || data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>
          {data.titles[0].title}
        </h1>
      </div>
      <div>
        <NavLink to="blank">Blank</NavLink>
        <NavLink to="producers">Producers</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
