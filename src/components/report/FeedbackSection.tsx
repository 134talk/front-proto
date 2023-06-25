import {
  LINE_ICON,
  NEGATIVE_ICON,
  POSITIVE_ICON,
} from 'shared/constants/icons';
import * as t from './feedbackSection.style';

type Props = {
  title: string;
  value: number;
};

export default function FeedbackSection({ title, value }: Props) {
  return (
    <t.Container>
      <div className="small">{title}</div>
      <t.Value color={value > 0 ? 'f0153d' : value === 0 ? '667085' : '259cf2'}>
        {value}%
        <img
          src={
            value > 0 ? POSITIVE_ICON : value === 0 ? LINE_ICON : NEGATIVE_ICON
          }
          alt="아이콘"
        />
      </t.Value>
    </t.Container>
  );
}
