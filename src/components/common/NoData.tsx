import { NOT_FOUND } from 'shared/constants/icons';
import { styled } from 'styled-components';
type Props = {
  text?: string;
};
export default function NoData({ text }: Props) {
  return (
    <Container>
      <img src={NOT_FOUND} alt="대화 내역이 없습니다." />
      <p>{text ? text : '대화 내역이 없습니다.'}</p>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding-top: 10rem;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.gray700};
  > img {
    width: 6.25rem;
    height: 6.25rem;
  }
`;
