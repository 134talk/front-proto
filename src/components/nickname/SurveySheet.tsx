import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonWrap from './ButtonWrap';
import RadioSelection from './RadioSelection';
import SurveyLegend from './SurveyLegend';
import * as t from './surveySheet.style';

type Props = {
  optionList: { id: number; option: string }[];
  question: string;
};

export default function SurveySheet({ optionList, question }: Props) {
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
    <t.Container>
      <SurveyLegend type={type} question={question} />
      <form onSubmit={handleSubmit}>
        {optionList.map(({ id, option }) => (
          <div key={id}>
            <RadioSelection
              id={id}
              exValue={exValue}
              option={option}
              handleChange={handleChange}
            />
          </div>
        ))}
        <ButtonWrap disabled={disabled} navigatePrev={navigatePrev} />
      </form>
    </t.Container>
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
