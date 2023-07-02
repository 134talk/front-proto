import * as t from './chartIcon.style';

type Props = {
  children: React.ReactNode;
  color: string;
};

export default function ChartIcon({ children, color }: Props) {
  return (
    <t.Container color={color}>
      <div>{children}</div>
    </t.Container>
  );
}
