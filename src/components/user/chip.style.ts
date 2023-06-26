import { styled } from 'styled-components';

export const Container = styled.div<{ $isRound: boolean; idx: number }>`
  width: 4.5rem;
  height: ${({ $isRound }) => ($isRound ? '4.5rem' : '1.25rem')};
  padding: 0.125rem 0.5rem;
  margin-top: ${({ idx, $isRound }) => idx !== 0 && !$isRound && '0.9rem'};
  background: ${({ theme }) => `${theme.pastel_blue}`};
  border-radius: 50px;
  color: ${({ theme }) => `${theme.gray800}`};
  font-size: ${({ theme, $isRound }) =>
    $isRound ? `${theme.fs16}` : `${theme.fs12}`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
