import { BaseModal } from 'components';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { KAKAO_ICON, LINK_ICON } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import { Button } from 'ui';
import * as t from './inviteModal.style';

type Props = {
  onClose: () => void;
};

export default function InviteModal({ onClose }: Props) {
  const { channel: channelId } = useUserData();

  const copyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.error('클립보드에 링크가 복사되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareByKakao = (route: string, title: string) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized())
        kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: '원하는 일을 하고, 삶을 사랑해요.',
          imageUrl:
            'https://134-back.s3.ap-northeast-2.amazonaws.com/icon/app_icon.jpeg',
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: route,
              webUrl: route,
            },
          },
        ],
      });
    }
  };

  return (
    <t.Container>
      <BaseModal isCloseButton={true} onClose={onClose}>
        <p>카카오톡 친구 목록에서 초대하기</p>
        <div className="buttonWrapper">
          <Button
            category="kakao"
            onClick={() =>
              shareByKakao(`https://134.works/?channel=${channelId}`, '134')
            }
          >
            <img src={KAKAO_ICON} alt="초대하기" /> 초대하기
          </Button>
          <Button
            category="confirm"
            onClick={() =>
              copyClipBoard(`https://134.works/?channel=${channelId}`)
            }
          >
            <img src={LINK_ICON} alt="링크복사" /> 링크복사
          </Button>
        </div>
      </BaseModal>
    </t.Container>
  );
}
