import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 0.25rem;
  img {
    width: 0.75rem;
    height: 0.75rem;
  }
  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: #259cf2;
    &.error {
      color: #f0153d;
    }
  }
`;
