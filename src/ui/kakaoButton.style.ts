import { styled } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 2.8rem;
  background: ${({ theme }) => theme.kakao_yellow};
  border-radius: 6px;
  position: relative;
  font-size: ${({ theme }) => theme.fs14};
  font-weight: ${({ theme }) => theme.fw500};
  color: ${({ theme }) => theme.gray900};
  margin-top: 12rem;
  img {
    position: absolute;
    top: 0.875rem;
    left: 0.896rem;
  }
`;
