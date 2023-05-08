import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  redirectPath: string;
};

export default function ProtectedRoute({ children, redirectPath }: Props) {
  // TODO: 서버 연결 후 주석 해제하기
  // const isAuth = !!sessionStorage.getItem('token');
  const isAuth = true;

  return (
    <>{isAuth ? <>{children}</> : <Navigate to={redirectPath} replace />}</>
  );
}
