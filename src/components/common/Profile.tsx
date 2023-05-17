import { styled } from 'styled-components';
import { ProfileImg } from 'ui';

interface ProfileProps {
  size?: string;
  nickname?: string;
  name?: string;
  gap?: string;
  textGap?: string;
  badgeGap?: string;
  fsNick?: string;
  fsName?: string;
  userId?: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <Container>
      <ProfileImg size={props.size ? props.size : '3.25rem'} />
      <div>
        <div className="nickname_wrapper">
          <p className="nickname">{props.nickname && props.nickname}</p>
          {props.userId && <span>나</span>}
        </div>
        <p className="name">{props.name && props.name}</p>
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
    gap: ${props => (props.textGap ? props.textGap : '0.313rem')};
    &.nickname_wrapper {
      display: flex;
      flex-direction: row;
      gap: ${props => (props.badgeGap ? props.badgeGap : '0.25rem')};
      span {
        padding: 0.125rem 0.5rem;
        font-size: 0.875rem;
        font-weight: bold;
        border-radius: 50px;
        background-color: #f1f3f5;
      }
    }
    p {
      &.nickname {
        font-size: ${props => (props.fsNick ? props.fsNick : '1rem')};
        font-weight: bold;
      }
      &.name {
        font-size: ${props => (props.fsName ? props.fsName : '0.875rem')};
        font-weight: normal;
        color: #475467;
      }
    }
  }
`;
