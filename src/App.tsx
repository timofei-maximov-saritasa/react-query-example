import { queryClient } from './api/queryClient.ts';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { rootRouter } from './routes/rootRouter.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

export const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={rootRouter} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </ThemeProvider>
);
