import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from 'shared/query/useAuth';

export default function KakaoPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const { signIn } = useAuth();

  useEffect(() => {
    signIn(code);
  }, [signIn, code]);

  return <></>;
}
