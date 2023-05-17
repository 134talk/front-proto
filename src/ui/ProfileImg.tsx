import styled from 'styled-components';

interface ProfileImgProps {
  image?: string;
  id?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

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
    />
  );
}

export const Profile = styled.img<ProfileImgProps>`
  width: ${props => (props.width ? props.width : '2rem')};
  height: ${props => (props.height ? props.height : '2rem')};
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
