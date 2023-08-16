export const queryKeyFactory = {
  base: ['characters'],
  character: (id: number) => [...queryKeyFactory.base, id],
};
