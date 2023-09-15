import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 20rem;
  height: 4rem;
  margin-bottom: 2rem;
  .user_wrapper {
    display: flex;
    flex-direction: column;
  }
  .user_image_wrapper {
    display: flex;
    position: relative;
    cursor: pointer;
  }
  .check_image {
    width: 1.125rem;
    height: 1.125rem;
    position: absolute;
    right: -0.25rem;
    cursor: pointer;
  }
  .user_name_text {
    font-size: ${({ theme }) => theme.fs12};
    color: ${({ theme }) => theme.gray700};
    font-weight: ${({ theme }) => theme.fw400};
    text-align: center;
    margin-top: 0.5rem;
  }
`;
