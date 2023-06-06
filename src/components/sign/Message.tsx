import { WARNING_ICON } from 'shared/constants/icons';
import * as t from './message.style';

type Props = {
  isError: boolean;
  isValue: boolean;
  text: string;
};

export default function Message({ isError, isValue, text }: Props) {
  return (
    <t.Container>
      {isError && (
        <>
          <img src={WARNING_ICON} alt="에러" />
          <span className="error"> 사용할 수 없는 이름입니다.</span>
        </>
      )}
      {isValue && !isError && <span>{text}</span>}
    </t.Container>
  );
}
