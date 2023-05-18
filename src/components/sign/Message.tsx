import { WARNING_ICON } from 'shared/constants/icons';
import * as t from './message.style';

type Props = {
  isError: boolean;
  isName: boolean;
};

export default function Message({ isError, isName }: Props) {
  return (
    <t.Container>
      {isError && (
        <>
          <img src={WARNING_ICON} alt="에러" />
          <span className="error"> 사용할 수 없는 이름입니다.</span>
        </>
      )}
      {isName && !isError && <span>사용할 수 있는 이름입니다.</span>}
    </t.Container>
  );
}
