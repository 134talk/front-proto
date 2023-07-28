import useUserData from 'shared/hooks/useUserData';
import { ProfileImg } from 'ui';
import * as t from './profile.style';

export interface ProfileProps {
  nickname?: string;
  name?: string;
  userId?: number;
  $isRow?: boolean;
  scale: 'small' | 'medium' | 'large';
  image?: string;
  isCheck?: boolean;
  isMyProf?: boolean;
}

export default function Profile({
  nickname,
  name,
  userId,
  $isRow,
  scale,
  image,
  isCheck,
  isMyProf,
}: ProfileProps) {
  const { uId } = useUserData();
  return (
    <t.Container scale={scale}>
      <ProfileImg
        size={
          (scale === 'small' && '2rem') ||
          (scale === 'medium' && '3.25rem') ||
          (scale === 'large' && '5.5rem')
        }
        image={image}
        $isMyProf={isMyProf}
        $isCheckIn={isCheck}
      />
      <t.NameWrapper $isRow={$isRow}>
        <div>
          {$isRow && String(userId) === uId && <span>나</span>}
          <t.NicknameText scale={scale}>{nickname && nickname}</t.NicknameText>
          {!$isRow && String(userId) === uId && <span>나</span>}
        </div>
        <t.NameText scale={scale}>{name && name}</t.NameText>
      </t.NameWrapper>
    </t.Container>
  );
}
