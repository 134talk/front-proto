import { styled } from 'styled-components';
import { ProfileImg } from 'ui';

interface ProfileProps {
  size?: string;
  nickname?: string;
  name?: string;
  gap?: string;
  mgrNick?: string;
  mgtName?: string;
  fsNick?: string;
  fsName?: string;
  fsBadge?: string;
  userId?: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <Container gap={props.gap}>
      <ProfileImg size={props.size ? props.size : '3.25rem'} />
      <div>
        <div className="nickname_wrapper">
          <NicknameText fsNick={props.fsNick} mgrNick={props.mgrNick}>
            {props.nickname && props.nickname}
          </NicknameText>
          {props.userId && <BadgeText fsBadge={props.fsBadge}>나</BadgeText>}
        </div>
        <NameText fsName={props.fsName} mgtName={props.mgtName}>
          {props.name && props.name}
        </NameText>
      </div>
    </Container>
  );
}

const Container = styled.div<ProfileProps>`
  display: flex;
  flex-direction: row;
  gap: ${props => (props.gap ? props.gap : '0.75rem')};
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
  margin-right: ${props => (props.mgrNick ? props.mgrNick : '0.25rem')};
  font-size: ${props => (props.fsNick ? props.fsNick : '1rem')};
  font-weight: bold;
`;
const BadgeText = styled.span<ProfileProps>`
  padding: 0.125rem 0.5rem;
  font-size: ${props => (props.fsBadge ? props.fsBadge : '0.875rem')};
  font-weight: bold;
  border-radius: 50px;
  background-color: #f1f3f5;
`;
const NameText = styled.p<ProfileProps>`
  margin-top: ${props => (props.mgtName ? props.mgtName : '0.313rem')};
  font-size: ${props => (props.fsName ? props.fsName : '0.875rem')};
  font-weight: normal;
  color: #475467;
`;
