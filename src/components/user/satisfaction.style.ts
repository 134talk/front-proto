import { styled } from 'styled-components';

export const Conatainer = styled.div`
  > p {
    color: ${({ theme }) => theme.gray900};
    font-size: ${({ theme }) => theme.fs12};
    text-align: center;
    margin-top: 0.56rem;
  }
`;
