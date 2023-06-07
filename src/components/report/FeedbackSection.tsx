import {
  LINE_ICON,
  NEGATIVE_ICON,
  POSITIVE_ICON,
} from 'shared/constants/icons';
import * as t from './feedbackSection.style';

type Props = {
  title: string;
  value: string;
};

export default function FeedbackSection({ title, value }: Props) {
  const numVal = parseInt(value);
  const score = Math.abs(numVal);

  return (
    <t.Container>
      <div className="small">{title}</div>
      <t.Value
        color={numVal > 0 ? 'f0153d' : numVal === 0 ? '667085' : '259cf2'}
      >
        {score}%
        <img
          src={
            numVal > 0
              ? POSITIVE_ICON
              : numVal === 0
              ? LINE_ICON
              : NEGATIVE_ICON
          }
          alt="아이콘"
        />
      </t.Value>
    </t.Container>
  );
}
