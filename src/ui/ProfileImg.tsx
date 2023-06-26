import { styled } from 'styled-components';

interface ProfileImgProps {
  image?: string;
  id?: string;
  size?: string;
  isClickable?: boolean;
  onClick?: () => void;
}

// check & remove image props optional!
export default function ProfileImg(props: ProfileImgProps) {
  return (
    <Profile
      src={
        props.image
          ? props.image
          : 'https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg'
      }
      alt="profileImg"
      {...props}
      size={props.size}
      $isClickable={props.isClickable}
    />
  );
}

export const Profile = styled.img<{ size: string; $isClickable: boolean }>`
  width: ${props => (props.size ? props.size : '2rem')};
  height: ${props => (props.size ? props.size : '2rem')};
  border-radius: 50%;
  object-fit: cover;
  cursor: ${({ $isClickable }) => $isClickable && 'pointer'};
`;
