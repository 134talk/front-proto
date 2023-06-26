import { Profile } from 'components';
import { SIGN_OUT_ICON } from 'shared/constants/icons';
import useAuth from 'shared/query/useAuth';
import * as t from './userProfile.style';

type Props = {
  profile: string;
  nickname: string;
  name: string;
};

export default function UserProfile({ profile, nickname, name }: Props) {
  const { signOut } = useAuth();
  const onLogout = () => signOut();

  return (
    <t.Container>
      <Profile image={profile} scale="large" nickname={nickname} name={name} />
      <div className="buttonWrapper">
        <button onClick={onLogout}>
          <img src={SIGN_OUT_ICON} alt="로그아웃" />
          로그아웃
        </button>
      </div>
    </t.Container>
  );
}
