import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .guide_text {
    margin: 1.25rem 0 2.438rem 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fw16};
  }
  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1rem;
    margin-bottom: 6.25rem;
  }
  .button_wrapper {
    margin: 0 1.25rem;
  }
`;
