import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5.875rem;
  > p {
    color: #7588ea;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    margin-top: 0.5rem;
    &.bold {
      margin-top: 1.5rem;
      font-weight: 600;
    }
  }
  > img {
    width: 6.688rem;
    height: 6.25rem;
    margin-top: 10.75rem;
  }
`;
