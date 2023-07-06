import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    text-align: center;
  }
  .guide_text {
    font-size: ${({ theme }) => theme.fs20};
    font-weight: ${({ theme }) => theme.fw700};
    > span {
      color: ${({ theme }) => theme.primary_deep_blue};
    }
  }
  .sub_text {
    font-size: ${({ theme }) => theme.fs14};
    font-weight: ${({ theme }) => theme.fw400};
    color: ${({ theme }) => theme.gray600};
  }
  div {
    &.carousel_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 95%;
      margin: 12rem 0;
      gap: 2rem;
      position: relative;
    }
    &.button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.75rem 1.25rem;
      margin-top: 2.25rem;
    }
  }
`;
export const StyledCard = styled.div<{ order: number; selected: boolean }>`
  position: absolute;
  transition: transform 0.3s;
  z-index: 1;
  transform: ${({ order, selected }) => {
    if (selected) return 'translateX(0)';
    if (order > 0) return `translateX(${100 * order}%)`;
    if (order < 0) return `translateX(${100 * order}%)`;
  }};
`;
