import { PROFILE_IMAGE } from 'shared/constants/icons';
import * as t from './profileImg.style';

export interface ProfileImgProps {
  image?: string;
  id?: string;
  $isMyProf?: boolean;
  $isCheckIn?: boolean;
  size?: string;
  onClick?: () => void;
}

export default function ProfileImg(props: ProfileImgProps) {
  return (
    <t.Profile
      src={props.image ? props.image : PROFILE_IMAGE}
      alt="profileImg"
      {...props}
    />
  );
}
