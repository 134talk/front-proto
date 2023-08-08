import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .guide_text {
    margin: 1.25rem 0 2.438rem 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fs20};
  }
  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    width: 24rem;
    row-gap: 1rem;
    column-gap: 0.5rem;
    margin-bottom: 6.25rem;
  }
  .button_wrapper {
    margin: 0 1.25rem;
  }
`;
