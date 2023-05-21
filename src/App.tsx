import { Toaster } from 'react-hot-toast';
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
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={30}
            containerStyle={{
              position: 'absolute',
              marginBottom: 110,
            }}
            toastOptions={{
              duration: 5000,
              style: {
                top: 1000,
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          <RouterProvider router={Router} />
        </div>
      </Device>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
