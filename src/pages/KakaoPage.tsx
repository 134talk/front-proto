import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from 'shared/query/useAuth';
import { Spinner } from 'ui';
import * as t from './kakaoPage.style';

export default function KakaoPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const { mutate } = useAuth();

  useEffect(() => {
    mutate(code);
  }, [mutate, code]);

  return (
    <t.Container>
      <p>연결 중입니다...</p>
      <Spinner isLoading={true} />
    </t.Container>
  );
}
