import * as t from './progressBar.style';

interface ProgressBarProps {
  type?: number;
}

export default function ProgressBar({ type }: ProgressBarProps) {
  return (
    <t.Container>
      {[...Array(6)].map((_, i) => (
        <div key={i}>
          <t.ProgressText $status={type >= i + 1}>{i + 1}</t.ProgressText>
          {i !== 5 && <t.ProgressLine $status={type >= i + 2} />}
        </div>
      ))}
    </t.Container>
  );
}
