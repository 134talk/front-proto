import { PROFILE_IMAGE } from 'shared/constants/icons';
import { styled } from 'styled-components';

export interface Props {
  image?: string;
  id?: string;
  $isMyProf?: boolean;
  $isCheckIn?: boolean;
  size?: string;
  $isClickable?: boolean;
  onClick?: () => void;
}

export default function ProfileImg(props: Props) {
  return (
    <Profile
      src={props.image ? props.image : PROFILE_IMAGE}
      alt="profileImg"
      {...props}
      size={props.size}
      $isClickable={props.$isClickable}
    />
  );
}

const Profile = styled.img<Props>`
  width: ${props => (props.size ? props.size : '2rem')};
  height: ${props => (props.size ? props.size : '2rem')};
  border: ${props => (props.$isMyProf ? '2px solid #7588EA' : 'none')};
  opacity: ${props => (props.$isCheckIn ? '0.5' : '1')};
  border-radius: 50%;
  object-fit: cover;
  cursor: ${props => props.$isClickable && 'pointer'};
`;
