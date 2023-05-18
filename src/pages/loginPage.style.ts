import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20.125rem;
  position: relative;
  .background {
    position: absolute;
    top: 0;
    width: calc(100% + 1.25rem * 2);
    min-height: 100vh;
    background: linear-gradient(349.51deg, #f58548 6.37%, #ffd87b 89.18%);
    z-index: -999;
  }
  > img {
    width: 6.688rem;
    height: 6.25rem;
    margin-top: 10.75rem;
  }
`;
