import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from 'shared/query/useAuth';
import { styled } from 'styled-components';
import { Spinner } from 'ui';

export default function KakaoPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const { mutate } = useAuth();

  useEffect(() => {
    mutate(code);
  }, [mutate, code]);

  return (
    <Container>
      <p>연결 중입니다...</p>
      <Spinner isLoading={true} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    margin-top: 300px;
  }
`;
