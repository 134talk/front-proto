import FullModal from 'components/common/FullModal';
import NavBar from 'components/common/NavBar';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  GUIDE01,
  GUIDE02,
  GUIDE03,
  GUIDE04,
  GUIDE05,
  GUIDE06,
  GUIDE07,
} from 'shared/constants/guideImgs';
import { SKIP_ICON } from 'shared/constants/icons';
import useUserData from 'shared/hooks/useUserData';
import useChatFlag from 'shared/query/useChatFlag';
import { Button } from 'ui';
import * as t from './guideModal.style';

type Props = {
  roomId: number;
  chatUserId: number;
  onClose: () => void;
};

export default function GuideModal({ roomId, chatUserId, onClose }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const { channel } = useUserData();

  const { mutate } = useChatFlag();

  const SETTINGS = {
    dotsClass: 'dotsCustom',
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <t.DotsWrapper>
        <ul>{dots}</ul>
      </t.DotsWrapper>
    ),
    beforeChange: (a: number, b: number) => {
      setCurrentSlide(b);
    },
  };

  const onSkip = () => sliderRef.current.slickGoTo(6);
  const onConfirm = () =>
    mutate({
      conversation_room_id: roomId,
      conversation_user_id: chatUserId,
      team_id: Number(channel),
    });

  return (
    <FullModal>
      <NavBar isMargin title="" button="닫기" handleClose={onClose} />
      <t.Container>
        <Slider {...SETTINGS} ref={sliderRef}>
          <div className="guide_wrapper">
            <img
              src={GUIDE01}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              인디언 이름으로 상대를 판단하거나
              <br />
              공격하지 않습니다.
            </p>
          </div>
          <div className="guide_wrapper">
            <img
              src={GUIDE02}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              순간에 몰입해서 내안에서
              <br />
              진솔한 답을 찾아보세요.
              <br />
              색다른 대화여행의 시작입니다.
            </p>
          </div>
          <div className="guide_wrapper">
            <img
              src={GUIDE03}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              상대가 원하지 않는 이상
              <br />
              조언을 하지 않습니다.
              <br />
              안전한 대화를 만들어요.
            </p>
          </div>
          <div className="guide_wrapper">
            <img
              src={GUIDE04}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              조언 대신, 지금의 내 감정에 대한
              <br />
              이야기를 합니다.
              <br />
              <span>
                ex{')'} 당신의 이야기를 들으니,
                <br />
                지금 제심장이 되게 떨리는 것 같아요!
              </span>
            </p>
          </div>
          <div className="guide_wrapper">
            <img
              src={GUIDE05}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              나의 생각은 언제든 틀릴 수 있습니다.
              <br />
              나는 상대의 생각과 시선,
              <br />
              다양성을 존중합니다.
            </p>
          </div>
          <div className="guide_wrapper">
            <img
              src={GUIDE06}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              골고루 대화할 수 있도록
              <br />
              시간을 배분해주세요.
            </p>
          </div>
          <div className="guide_wrapper">
            <img
              src={GUIDE07}
              alt="인디언 이름으로 상대를 판단하거나 공격하지 않습니다."
            />
            <p>
              상대를 호감과 호기심으로 대하고,
              <br /> 질문하며 들어주세요.
              <br />
              단답형 대답만 이어지는 건 너무 아쉬워요.
              <br />
              <br />
              <span className="blue">
                묻고 답하는 대화 분위기를 만들어주세요.
              </span>
              <br />
              호기심의 질문은 대화를 춤추게 해요!
            </p>
          </div>
        </Slider>
        <section>
          <t.SkipButton currentSlide={currentSlide} onClick={onSkip}>
            <img src={SKIP_ICON} alt="건너뛰기" />
            건너뛰기
          </t.SkipButton>
          <Button
            onClick={onConfirm}
            text="대화 하러가기"
            category="confirm"
            disabled={currentSlide !== 6}
          />
        </section>
      </t.Container>
    </FullModal>
  );
}
