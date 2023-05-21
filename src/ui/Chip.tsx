import { CANCEL_ICON } from 'shared/constants/icons';
import * as t from './chip.style';

export type ChipProps = {
  text: string;
  isDelete?: boolean;
  onDelete?: () => void;
};

export default function Chip({ text, isDelete, onDelete }: ChipProps) {
  return (
    <t.Container text={text}>
      <span>{text}</span>
      {isDelete && <img src={CANCEL_ICON} alt="취소" onClick={onDelete} />}
    </t.Container>
  );
}
