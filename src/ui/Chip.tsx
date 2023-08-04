import { CANCEL_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';

export interface Props {
  text: string;
  isDelete?: boolean;
  onDelete?: () => void;
}

export default function Chip({ text, isDelete, onDelete }: Props) {
  return (
    <Container text={text}>
      <span>{text}</span>
      {isDelete && <img src={CANCEL_ICON} alt="취소" onClick={onDelete} />}
    </Container>
  );
}

const Container = styled.div<Props>`
  display: inline-block;
  background: ${({ text, theme }) =>
    text === '참여가능' ? theme.chip_green : theme.gray100};
  padding: 0.125rem 0.5rem;
  margin-bottom: ${({ text }) => (text === '참여가능' ? '0' : '0.6rem')};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fs14};
  font-weight: ${({ theme }) => theme.fw700};
  color: ${({ theme }) => theme.gray800};
  position: relative;
  img {
    vertical-align: text-top;
    width: 1.042rem;
    height: 1.042rem;
    margin-left: 4px;
    margin-right: -3px;
    cursor: pointer;
  }
`;
