import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function NicknamePage() {
  const { type } = useParams();

  return (
    <div>
      <>
        {type === 'mood' && (
          <SurveySheet
            optionList={MOOD_OPTIONS}
            question={'최근에 나의 감정을 나타내는 단어가 있나요?'}
          />
        )}
        {type === 'personality' && (
          <SurveySheet
            optionList={PERSONALITY_OPTIONS}
            question={'업무를 할 때 나의 행동과 비슷한 단어가 있나요?'}
          />
        )}
        {type === 'status' && (
          <SurveySheet
            optionList={STATUS_OPTIONS}
            question={'지금 내가 원하는 상태가 있나요?'}
          />
        )}
      </>
    </div>
  );
}

type Props = {
  optionList: { id: number; option: string }[];
  question: string;
};

function SurveySheet({ optionList, question }: Props) {
  const { type } = useParams();
  const navigate = useNavigate();
  const exValue = localStorage.getItem(type);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedValue = String(formData.get('option'));
    storeValue(selectedValue);
  };

  const storeValue = (selectedValue: string) => {
    localStorage.setItem(type, selectedValue);
    //TODO: type === 'status'면 <POST 닉네임 설정>
    type === 'status' ? navigate('/nickname/result') : navigateNext();
  };
  const removeValue = (nextType: string) => localStorage.removeItem(nextType);

  const navigateNext = () => {
    const { nextType, nextRoute } = ROUTES[type];
    removeValue(nextType);
    navigate(nextRoute);
  };

  const navigatePrev = () => {
    const { prevRoute } = ROUTES[type];
    navigate(prevRoute);
  };

  const handleChange = () => setDisabled(false);

  return (
    <div>
      <legend>{question}</legend>
      <form onSubmit={handleSubmit}>
        {optionList.map(({ id, option }) => (
          <div key={id}>
            <input
              type="radio"
              name="option"
              value={id}
              id={id.toString()}
              onChange={handleChange}
              defaultChecked={parseInt(exValue) === id}
            />
            <label htmlFor={id.toString()}>{option}</label>
          </div>
        ))}
        <button type="submit" disabled={disabled}>
          다음
        </button>
      </form>
      <button onClick={navigatePrev}>이전</button>
    </div>
  );
}

interface Routes {
  [type: string]: {
    nextType: string;
    nextRoute: string;
    prevRoute: string;
  };
}

const ROUTES: Routes = {
  mood: {
    nextType: 'personality',
    nextRoute: '/nickname/personality',
    prevRoute: '/nickname/guide',
  },
  personality: {
    nextType: 'status',
    nextRoute: '/nickname/status',
    prevRoute: '/nickname/mood',
  },
  status: {
    nextType: '',
    nextRoute: '/nickname/result',
    prevRoute: '/nickname/personality',
  },
};

const MOOD_OPTIONS = [
  {
    id: 1,
    option: '희망이 조금씩 생기는',
  },
  {
    id: 2,
    option: '점차 걱정이 생기는',
  },
  {
    id: 3,
    option: '속이 타는 마음',
  },
  {
    id: 4,
    option: '정신없이 요동치는',
  },
  {
    id: 5,
    option: '고요하고 감사한',
  },
];

const PERSONALITY_OPTIONS = [
  {
    id: 1,
    option: '경청을 잘하고 전체 의견을 조율하는',
  },
  {
    id: 2,
    option: '열정적인 목표 달성과 리더십',
  },
  {
    id: 3,
    option: '나름의 계획과 효율이 중요한',
  },
  {
    id: 4,
    option: '힘을 빼고 유쾌하게 평균 이상',
  },
  {
    id: 5,
    option: '고요하게 반격을 준비하는',
  },
];

const STATUS_OPTIONS = [
  {
    id: 1,
    option: '배움과 성장',
  },
  {
    id: 2,
    option: '휴식과 여행',
  },
  {
    id: 3,
    option: '공감과 평화',
  },
  {
    id: 4,
    option: '성과달성과 보상받기',
  },
  {
    id: 5,
    option: '변화와 해결',
  },
];
