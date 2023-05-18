import * as t from './surveyLegend.style';

type Props = {
  type: string;
  question: string;
};

export default function SurveyLegend({ type, question }: Props) {
  return (
    <t.Container>
      <p>
        Q{type === 'mood' ? '1' : type === 'personality' ? '2' : '3'}.<br />
        <span>{question}</span>
      </p>
    </t.Container>
  );
}
