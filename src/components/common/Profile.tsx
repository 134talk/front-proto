import { styled } from 'styled-components';
import { ProfileImg } from 'ui';

interface ProfileProps {
  nickname?: string;
  name?: string;
  userId?: string;
  scale: 'small' | 'medium' | 'large';
}

export default function Profile({
  nickname,
  name,
  userId,
  scale,
}: ProfileProps) {
  return (
    <Container scale={scale}>
      <ProfileImg
        size={
          (scale === 'small' && '2rem') ||
          (scale === 'medium' && '3.25rem') ||
          (scale === 'large' && '5.5rem')
        }
      />
      <div>
        <div className="nickname_wrapper">
          <NicknameText scale={scale}>{nickname && nickname}</NicknameText>
          {userId && <BadgeText>나</BadgeText>}
        </div>
        <NameText scale={scale}>{name && name}</NameText>
      </div>
    </Container>
  );
}

const Container = styled.div<ProfileProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props =>
    (props.scale === 'small' && '0.75rem') ||
    (props.scale === 'medium' && '0.75rem') ||
    (props.scale === 'large' && '1rem')};
  div {
    display: flex;
    flex-direction: column;
    &.nickname_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;
const NicknameText = styled.p<ProfileProps>`
  margin-right: ${props =>
    (props.scale === 'small' && '0.25rem') ||
    (props.scale === 'medium' && '0.375rem') ||
    (props.scale === 'large' && '0')};
  font-size: ${props =>
    (props.scale === 'small' && '0.875rem') ||
    (props.scale === 'medium' && '1rem') ||
    (props.scale === 'large' && '1.125rem')};
  font-weight: bold;
`;
const BadgeText = styled.span`
  padding: 0.125rem 0.5rem;
  font-size: '0.75rem';
  font-weight: bold;
  border-radius: 50px;
  background-color: #f1f3f5;
`;
const NameText = styled.p<ProfileProps>`
  margin-top: ${props =>
    (props.scale === 'small' && '0.125rem') ||
    (props.scale === 'medium' && '0.313rem') ||
    (props.scale === 'large' && '0.5rem')};
  font-size: ${props =>
    (props.scale === 'small' && '0.75rem') ||
    (props.scale === 'medium' && '0.875rem') ||
    (props.scale === 'large' && '0.875rem')};
  font-weight: normal;
  color: #475467;
`;
