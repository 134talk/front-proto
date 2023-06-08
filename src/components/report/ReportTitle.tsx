import * as t from './reportTitle.style';

type Props = {
  text: string;
};

export default function ReportTitle({ text }: Props) {
  return <t.Container>{text}</t.Container>;
}
