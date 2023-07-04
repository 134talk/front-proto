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
  background: ${({ theme }) => theme.dark_backdrop};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const NavWrapper = styled.div<{ $isMobile: boolean }>`
  width: 18.75rem;
  height: 100%;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  margin-top: ${({ $isMobile }) => ($isMobile ? '0' : '2.75rem')};
  padding: 0 1.25rem;
  animation: fadeInLeft 0.5s ease-in;
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .title_wrapper {
    width: 100%;
    padding: 1.625rem 0 0.5rem 0;
    display: flex;
    flex-direction: column;
  }
  .title_text {
    font-size: ${({ theme }) => theme.fs16};
    font-weight: ${({ theme }) => theme.fw700};
  }
  .sub_text {
    color: ${({ theme }) => theme.gray600};
    font-size: ${({ theme }) => theme.fs14};
  }
  .emotion_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 0.5rem;
    padding: 0.875rem 0;
    border-bottom: 1px dashed ${({ theme }) => theme.gray200};
  }
  .emotion_content_wrapper {
    width: 4.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    > p {
      color: ${({ theme }) => theme.gray500};
      font-size: ${({ theme }) => theme.fs12};
      font-weight: ${({ theme }) => theme.fw400};
    }
  }
  .image_wrapper {
    display: flex;
    position: relative;
    > img {
      width: 1.5rem;
    }
    .badge_wrapper {
      width: 0.875rem;
      height: 0.875rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.primary_deep_blue};
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 1rem;
      top: -0.25rem;
      > span {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.fs10};
      }
    }
  }
  .guide_wrapper {
    width: 100%;
    padding-bottom: 1.5rem;
    border-bottom: 1px dashed ${({ theme }) => theme.gray200};
    > ol {
      width: 100%;
      padding: 1.25rem;
      background: ${({ theme }) => theme.gray100};
      border: 1px solid ${({ theme }) => theme.gray200};
      border-radius: 0.75rem;
      > li {
        font-size: ${({ theme }) => theme.fs14};
        font-weight: ${({ theme }) => theme.fw400};
        color: ${({ theme }) => theme.gray600};
      }
    }
  }
`;
