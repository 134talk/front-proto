import * as t from './bottomButtonTab.style';

type Props = {
  children: React.ReactNode;
};
export default function BottomButtonTab({ children }: Props) {
  return <t.Container>{children}</t.Container>;
}
