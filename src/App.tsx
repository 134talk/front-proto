import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from 'shared/styles/globalStyle';
import theme from 'shared/styles/theme';
import Device from 'shared/utils/Device';
import queryClient from 'shared/utils/queryClient';
import Router from 'shared/utils/Router';
import { ThemeProvider } from 'styled-components';
import { Loader } from 'ui';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Device>
          <div className="App">
            <GlobalStyle />
            <Loader />
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
                  background: 'rgba(0, 0, 0, 0.85)',
                  color: '#fff',
                  width: '100%',
                  fontSize: '1rem',
                  fontWeight: 500,
                },
                error: {
                  icon: null,
                },
              }}
            />
            <RouterProvider router={Router} />
          </div>
        </Device>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

declare global {
  interface Window {
    Kakao: any;
  }
}

export default App;
