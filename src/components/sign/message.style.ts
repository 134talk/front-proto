import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 0.25rem;
  img {
    width: 0.75rem;
    height: 0.75rem;
  }
  span {
    font-size: ${({ theme }) => theme.fs12};
    font-weight: ${({ theme }) => theme.fw400};
    color: ${({ theme }) => theme.good_blue};
    &.error {
      color: ${({ theme }) => theme.error_red};
    }
  }
`;
