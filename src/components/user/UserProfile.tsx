import { Profile } from 'components';
import { SIGN_OUT_ICON } from 'shared/constants/icons';
import logout from 'shared/utils/logout';
import * as t from './userProfile.style';

export default function UserProfile() {
  return (
    <t.Container>
      <Profile scale="large" nickname="들썩이는 매의 일격" name="유저" />
      <div className="buttonWrapper">
        <button>
          <img src={SIGN_OUT_ICON} alt="로그아웃" onClick={logout} />
          로그아웃
        </button>
      </div>
    </t.Container>
  );
}
