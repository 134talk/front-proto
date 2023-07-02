import { styled } from 'styled-components';

export const Container = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > img {
    position: relative;
  }
  .tutorial1_image {
    width: 13.375rem;
    height: 9.063rem;
    margin-top: 2.25rem;
    margin-right: 0.75rem;
  }
  .tutorial1_1_image {
    width: 13.375rem;
    height: 9.063rem;
    margin-right: 0.75rem;
  }
  .tutorial2_image {
    width: 100%;
    margin-bottom: 8.875rem;
  }
`;
