import { CANCEL_ICON } from 'shared/constants/icons';
import * as t from './chip.style';

export type ChipProps = {
  text: string;
  isDelete?: boolean;
  handleDelete?: () => void;
};

export default function Chip({ text, isDelete, handleDelete }: ChipProps) {
  return (
    <t.Container text={text}>
      <span>{text}</span>
      {isDelete && <img src={CANCEL_ICON} alt="취소" onClick={handleDelete} />}
    </t.Container>
  );
}
