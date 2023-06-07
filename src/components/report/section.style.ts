import { styled } from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 1.25rem);
  padding: 1.6rem 1.25rem;
  border-radius: 20px;
  background: #ffffff;
  margin-top: 1.25rem;
  .subtitle {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    line-height: 1.4;
    span {
      color: #4059de;
    }
  }
  .chartWrapper {
    margin-top: 1.25rem;
  }
  .rankWrapper {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    p {
      min-width: 1.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: #7588ea;
      &:nth-child(2) {
        font-weight: 400;
        color: #475467;
      }
    }
  }
`;
