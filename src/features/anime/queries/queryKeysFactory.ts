export const queryKeysFactory = {
  anime: (id: number) => [...queryKeysFactory.base, id],
  animeProducers: (animeId: number, ids: number[]) => [...queryKeysFactory.anime(animeId), 'producers', ids],
  base: ['anime'],
};
