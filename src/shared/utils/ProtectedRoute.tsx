import React from 'react';
import { Navigate } from 'react-router-dom';
import useUserData from 'shared/hooks/useUserData';

type Props = {
  children: React.ReactNode;
  redirectPath: string;
};

export default function ProtectedRoute({ children, redirectPath }: Props) {
  const { isUserData } = useUserData();

  return (
    <>{isUserData ? <>{children}</> : <Navigate to={redirectPath} replace />}</>
  );
}
