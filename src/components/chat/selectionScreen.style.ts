import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    &.nav_guide_text {
      margin: 1.25rem 0 2.438rem 0;
      text-align: center;
      font-size: 1rem;
      line-height: 1.3rem;
    }
    &.guide_text {
      text-align: center;
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
  div {
    &.card_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
    &.button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.75rem 0;
    }
  }
`;
