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
            containerStyle={{
              position: 'absolute',
              marginBottom: 110,
            }}
            toastOptions={{
              duration: 5000,
              style: {
                top: 1000,
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                opacity: 0.5,
                width: '100%',
                fontSize: '1rem',
                fontWeight: 500,
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
