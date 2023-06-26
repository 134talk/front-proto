import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    text-align: center;
  }
  .guide_text {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  .sub_text {
    font-size: 0.875rem;
    line-height: 1.6125rem;
    font-weight: 400;
    color: #667085;
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
      padding: 0.75rem 0;
      margin-top: 2.25rem;
    }
  }
`;
export const StyledCard = styled.div<{ order: number; selected: boolean }>`
  position: absolute;
  transition: transform 0.5s;
  transform: ${props => {
    if (props.selected) return 'translateX(0)';
    if (props.order > 0) return `translateX(${100 * props.order}%)`;
    if (props.order < 0) return `translateX(${100 * props.order}%)`;
  }};
`;
