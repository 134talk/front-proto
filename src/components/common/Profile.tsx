import { ProfileImg } from 'ui';
import * as t from './profile.style';

export interface ProfileProps {
  nickname?: string;
  name?: string;
  userId?: string;
  isRow?: boolean;
  scale: 'small' | 'medium' | 'large';
}

export default function Profile({
  nickname,
  name,
  userId,
  isRow,
  scale,
}: ProfileProps) {
  return (
    <t.Container scale={scale}>
      <ProfileImg
        size={
          (scale === 'small' && '2rem') ||
          (scale === 'medium' && '3.25rem') ||
          (scale === 'large' && '5.5rem')
        }
      />
      <t.NameWrapper isRow={isRow}>
        <div>
          {isRow && userId && <span>나</span>}
          <t.NicknameText scale={scale}>{nickname && nickname}</t.NicknameText>
          {!isRow && userId && <span>나</span>}
        </div>
        <t.NameText scale={scale}>{name && name}</t.NameText>
      </t.NameWrapper>
    </t.Container>
  );
}
