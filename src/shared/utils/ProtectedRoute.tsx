import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  redirectPath: string;
};

export default function ProtectedRoute({ children, redirectPath }: Props) {
  const isAuth = !!sessionStorage.getItem('token');

  return (
    <>{isAuth ? <>{children}</> : <Navigate to={redirectPath} replace />}</>
  );
}
