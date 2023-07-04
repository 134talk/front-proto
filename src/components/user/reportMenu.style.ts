import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 10rem);
  margin-top: 130px;
  .sectionWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.75rem;
    .noData {
      margin-top: 150px;
      color: ${({ theme }) => theme.gray500};
      font-size: ${({ theme }) => theme.fs16};
      text-align: center;
    }
    .reportMenu {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      &:last-child {
        .pointLineWrapper > .line {
          visibility: hidden;
        }
      }
      .pointLineWrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .point {
          width: 0.938rem;
          height: 0.938rem;
          background-color: ${({ theme }) => theme.primary_blue};
          border-radius: 50%;
          margin-top: 0.9rem;
        }
        .line {
          width: 0.6rem;
          height: 1.438rem;
          border-left: ${({ theme }) => `2px solid ${theme.gray300}`};
          margin-left: 0.4rem;
        }
      }
      > section {
        width: 17.375rem;
        height: 2.8rem;
        padding: 0.688rem 0.6rem 0.688rem 1.25rem;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.white};
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        p {
          font-size: ${({ theme }) => theme.fs16};
          color: ${({ theme }) => theme.gray900};
          span {
            font-weight: ${({ theme }) => theme.fw600};
          }
        }
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
