import { Profile } from 'components';
import { useNavigate } from 'react-router-dom';
import { SIGN_OUT_ICON } from 'shared/constants/icons';
import useAuth from 'shared/query/useAuth';
import * as t from './userProfile.style';

type Props = {
  tab: string;
  profile: string;
  nickname: string;
  name: string;
};

export default function UserProfile({ tab, profile, nickname, name }: Props) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const onLogout = () => signOut();

  return (
    <t.Container>
      <section className="profile">
        <Profile
          image={profile}
          scale="large"
          nickname={nickname}
          name={name}
        />
        <div className="buttonWrapper">
          <button onClick={onLogout}>
            <img src={SIGN_OUT_ICON} alt="로그아웃" />
            로그아웃
          </button>
        </div>
      </section>
      <section>
        <t.Tab
          onClick={() => navigate('/user?tab=info')}
          $isSelected={tab === 'info'}
        >
          나의 정보
        </t.Tab>
        <t.Tab
          onClick={() => navigate('/user?tab=chat')}
          $isSelected={tab === 'chat'}
        >
          나의 대화
        </t.Tab>
      </section>
    </t.Container>
  );
}
