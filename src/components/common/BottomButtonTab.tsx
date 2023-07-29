import * as t from './bottomButtonTab.style';

type Props = {
  children: React.ReactNode;
  height?: string;
};
export default function BottomButtonTab({ children, height }: Props) {
  return <t.Container $height={height}>{children}</t.Container>;
}
