import { BaseModal } from 'components';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { KAKAO_ICON, LINK_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';
import { Button } from 'ui';

type Props = {
  onClose: () => void;
};

export default function InviteModal({ onClose }: Props) {
  const location = useLocation();

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.error('클립보드에 링크가 복사되었어요.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <BaseModal isCloseButton={true} onClose={onClose}>
        <p>카카오톡 친구 목록에서 초대하기</p>
        <div className="buttonWrapper">
          <Button category="kakao">
            <img src={KAKAO_ICON} alt="초대하기" /> 초대하기
          </Button>
          <Button
            category="confirm"
            onClick={() =>
              handleCopyClipBoard(
                `${process.env.REACT_APP_BASE_URL}/login?channel=${location.pathname}`
              )
            }
          >
            <img src={LINK_ICON} alt="링크복사" /> 링크복사
          </Button>
        </div>
      </BaseModal>
    </Container>
  );
}

const Container = styled.div`
  p {
    font-size: 1.13rem;
    font-weight: 700;
    margin-top: 0.8rem;
  }
  .buttonWrapper {
    width: 100%;
    height: 2.75rem;
    display: flex;
    gap: 0.5rem;
    margin-top: 2.6rem;
  }
`;
