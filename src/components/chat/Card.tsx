import { SELECTED_IMAGE } from 'shared/constants/cards';
import { ROTATE_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';

interface CardProps {
  type?: 'keyword' | 'chat';
  isFront?: boolean;
  size?: string;
  fillColor: string;
  lightColor: string;
  darkColor: string;
  keyword: string;
  hint?: string;
  question?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function Card({
  type,
  isFront,
  size,
  fillColor,
  lightColor,
  darkColor,
  keyword,
  hint,
  question,
  selected,
  onClick,
}: CardProps) {
  return (
    <>
      <Container isFront={isFront} size={size} onClick={onClick}>
        <svg
          viewBox="0 0 243 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.5 5.7735C117.688 2.20085 125.312 2.20085 131.5 5.7735L216.722 54.9765C222.91 58.5492 226.722 65.1517 226.722 72.297V170.703C226.722 177.848 222.91 184.451 216.722 188.023L131.5 237.227C125.312 240.799 117.688 240.799 111.5 237.227L26.2779 188.023C20.0899 184.451 16.2779 177.848 16.2779 170.703V72.297C16.2779 65.1517 20.0899 58.5492 26.2779 54.9765L111.5 5.7735Z"
            fill="url(#paint)"
          />
          <Path
            d="M112 13.7735C118.188 10.2008 125.812 10.2008 132 13.7735L210.727 59.2265C216.915 62.7992 220.727 69.4017 220.727 76.547V167.453C220.727 174.598 216.915 181.201 210.727 184.773L132 230.227C125.812 233.799 118.188 233.799 112 230.227L33.2731 184.773C27.0851 181.201 23.2731 174.598 23.2731 167.453V76.547C23.2731 69.4017 27.0851 62.7992 33.2731 59.2265L112 13.7735Z"
            fill={fillColor}
          />
          <defs>
            <linearGradient
              id="paint"
              x1="121.5"
              y1="0"
              x2="121.5"
              y2="243"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".514" stopColor={lightColor} />
              <stop offset="1" stopColor={darkColor} />
            </linearGradient>
          </defs>
        </svg>
        {type === 'keyword' && selected && (
          <img
            className="selected_image"
            src={SELECTED_IMAGE}
            alt="item.keyword"
          />
        )}
        {type === 'keyword' && selected && (
          <p className="keyword_text">{keyword}</p>
        )}
        {type === 'chat' && (
          <div className="chat_wrapper" onClick={onClick}>
            {isFront ? (
              <>
                <p className="chat_keyword_text">{keyword}</p>
                <p className="chat_hint_text">{hint}</p>
                <div className="button_wrapper">
                  <img src={ROTATE_ICON} alt="rotate" />
                  <button className="chat_button">뒷면 확인하기</button>
                </div>
              </>
            ) : (
              <>
                <p className="chat_question_text">{question}</p>
                <div className="button_wrapper">
                  <img src={ROTATE_ICON} alt="rotate" />
                  <button className="chat_button">앞면 확인하기</button>
                </div>
              </>
            )}
          </div>
        )}
      </Container>
    </>
  );
}

const Container = styled.div<{ isFront: boolean; size: string }>`
  width: ${props => (props.size ? props.size : '6rem')};
  opacity: ${props => (props.isFront ? 0.8 : 1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  img {
    &.selected_image {
      position: absolute;
      width: 6.5rem;
      z-index: 1;
    }
  }
  p {
    color: #fff;
    text-align: center;
    &.keyword_text {
      position: absolute;
      font-size: 1rem;
    }
    &.chat_keyword_text {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    &.chat_hint_text {
      font-size: 0.675rem;
      line-height: 1.3rem;
      font-weight: 400;
    }
    &.chat_question_text {
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
  }
  div {
    &.chat_wrapper {
      width: 100%;
      height: 100%;
      padding: 0 2.75rem;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 99;
    }
    &.button_wrapper {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      position: fixed;
      top: 44%;
      left: 40%;
    }
  }
  button {
    &.chat_button {
      font-size: 0.675rem;
      color: #1d2939;
      padding: 0;
      margin: 0;
      background-color: transparent;
    }
  }
`;
const Path = styled.path`
  mix-blend-mode: multiply;
`;
