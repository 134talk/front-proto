import { styled } from 'styled-components';

export const Container = styled.div`
  > p {
    color: ${({ theme }) => theme.gray700};
    font-size: ${({ theme }) => theme.fs12};
    text-align: center;
    margin-top: 0.75rem;
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.15rem;
  color: ${({ theme }) => theme.gray900};
  font-size: ${({ theme }) => theme.fs12};
  font-weight: ${({ theme }) => theme.fw700};
  margin-top: 0.25rem;
  p {
    min-width: 2.6rem;
  }
  .negative {
    min-width: 50%;
    display: flex;
    justify-content: flex-end;
    gap: 0.2rem;
    > p {
      text-align: right;
    }
  }
  .positive {
    min-width: 50%;
    display: flex;
    gap: 0.2rem;
  }
`;

export const NegativeBar = styled.div<{ value: number }>`
  min-width: 0.125rem;
  width: ${({ value }) => `calc(6rem /100 *${value})`};
  height: 1.125rem;
  background: ${({ theme }) => theme.good_blue};
  border-radius: 4px;
`;

export const PositiveBar = styled.div<{ value: number }>`
  min-width: 0.125rem;
  width: ${({ value }) => `calc(6rem /100 *${value})`};
  height: 1.125rem;
  background: ${({ theme }) => theme.error_red};
  border-radius: 4px;
`;
