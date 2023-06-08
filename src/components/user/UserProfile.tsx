import { Profile } from 'components';
import { SIGN_OUT_ICON } from 'shared/constants/icons';
import * as t from './userProfile.style';

export default function UserProfile() {
  const logout = () => {
    sessionStorage.removeItem('token');
    localStorage.clear();
  };

  return (
    <t.Container>
      <Profile scale="large" nickname="들썩이는 매의 일격" name="유저" />
      <button>
        <img src={SIGN_OUT_ICON} alt="로그아웃" onClick={logout} />
        로그아웃
      </button>
    </t.Container>
  );
}
