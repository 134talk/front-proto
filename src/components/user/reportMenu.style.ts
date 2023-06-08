import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 10rem);
  position: absolute;
  overflow: auto;
  padding-bottom: 2rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 10rem;
  &::-webkit-scrollbar {
    display: none;
  }
  .sectionWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.75rem;
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
          background-color: #7588ea;
          border-radius: 50%;
          margin-top: 0.9rem;
        }
        .line {
          width: 0.6rem;
          height: 1.438rem;
          border-left: 2px solid #d5dae0;
          margin-left: 0.4rem;
        }
      }
      > section {
        width: 17.375rem;
        height: 2.8rem;
        padding: 0.688rem 0.6rem 0.688rem 1.25rem;
        border-radius: 8px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        p {
          font-size: 1rem;
          color: #111111;
          span {
            font-weight: 600;
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
