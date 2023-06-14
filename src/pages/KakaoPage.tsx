import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from 'shared/query/useAuth';

export default function KakaoPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const { mutate } = useAuth();

  useEffect(() => {
    mutate(code);
  }, [mutate, code]);

  return <></>;
}
