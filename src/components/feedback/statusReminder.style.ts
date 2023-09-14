import { styled } from 'styled-components';

export const Container = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => $isMobile && 'calc(100% - 320px)'};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .content_wrapper {
    display: flex;
    flex-direction: row;
    .text_wrapper {
      width: 14rem;
      display: flex;
      flex-direction: column;
      padding-left: 1.25rem;
      margin-right: 0.75rem;
      .main_text {
        width: 11rem;
        font-size: ${({ theme }) => theme.fs18};
        font-weight: ${({ theme }) => theme.fw400};
        margin-top: 4rem;
        margin-bottom: 0.5rem;
        > span {
          color: ${({ theme }) => theme.error_red};
        }
      }
      .sub_text {
        font-size: ${({ theme }) => theme.fs14};
        font-weight: ${({ theme }) => theme.fw400};
        color: ${({ theme }) => theme.gray600};
      }
    }
  }
`;
export const PercentText = styled.div<{ $padding: number }>`
  font-size: ${({ theme }) => theme.fs56};
  font-weight: ${({ theme }) => theme.fw700};
  text-align: right;
  // padding-top: ${({ $padding }) => ($padding ? '0.5rem' : '4rem')};
  padding-top: ${({ $padding }) =>
    $padding === 4 ? '2.55rem' : $padding === 6 ? '0.25rem' : '4rem'};
  > span {
    font-size: ${({ theme }) => theme.fs18};
  }
`;
