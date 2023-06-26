import { styled } from 'styled-components';
import type { ProfileImgProps } from './ProfileImg';

export const Profile = styled.img<ProfileImgProps>`
  width: ${props => (props.size ? props.size : '2rem')};
  height: ${props => (props.size ? props.size : '2rem')};
  border: ${props => (props.$isMyProf ? '2px solid #7588EA' : 'none')};
  opacity: ${props => (props.$isCheckIn ? '1' : '0.5')};
  border-radius: 50%;
  object-fit: cover;
  cursor: ${props => props.$isClickable && 'pointer'};
`;
