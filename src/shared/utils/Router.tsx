import { Nav } from 'components';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AuthRouter, BaseRouter } from './RouterList';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {BaseRouter.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
      {AuthRouter.map(({ id, path, isTab, element }) => (
        <Route
          key={id}
          path={path}
          element={
            <ProtectedRoute redirectPath="/">
              {isTab && <Nav />}
              {element}
            </ProtectedRoute>
          }
        />
      ))}
    </>
  )
);

export default Router;
