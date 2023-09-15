import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22.313rem;
  padding: 1.5rem 0;
  div {
    &.navbar_wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      margin-bottom: 1.75rem;
      height: 3.376rem;
    }
    &.navbar_top_wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &.button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  p {
    &.guide_text {
      width: 100%;
      text-align: center;
      font-size: ${({ theme }) => theme.fs18};
      font-weight: ${({ theme }) => theme.fw700};
    }
    &.sub_text {
      width: 100%;
      text-align: center;
      font-size: ${({ theme }) => theme.fs16};
    }
  }
`;
