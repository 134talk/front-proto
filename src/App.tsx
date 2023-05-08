import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from 'shared/styles/globalStyle';
import Device from 'shared/utils/Device';
import queryClient from 'shared/utils/queryClient';
import Router from 'shared/utils/Router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Device>
        <div className="App">
          <GlobalStyle />
          <RouterProvider router={Router} />
        </div>
      </Device>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
