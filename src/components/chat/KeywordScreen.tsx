import { NavBar } from 'components';
import { useState } from 'react';
import { CARD_IMAGE, SELECTED_IMAGE } from 'shared/constants/cards';
import { KEYWORD_LIST } from 'shared/constants/constants';
import { styled } from 'styled-components';
import { Button } from 'ui';

export default function KeywordScreen() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const handleSelectKeyword = (keyword: string) => {
    // 3개 이상 선택했을 때 알림 노출 필요
    if (selectedKeywords.length < 3 && !selectedKeywords.includes(keyword)) {
      setSelectedKeywords([...selectedKeywords, keyword]);
    } else {
      const deleteKeywords = selectedKeywords.filter(item => item !== keyword);
      setSelectedKeywords(deleteKeywords);
    }
  };

  return (
    <Container>
      <NavBar isCenter={true} title="대화방" />
      <p className="guide_text">키워드 3개를 선택해주세요.</p>
      <div className="card_wrapper">
        {KEYWORD_LIST.map(item => (
          <img
            className="card_image"
            src={
              selectedKeywords.includes(item.keyword)
                ? SELECTED_IMAGE
                : CARD_IMAGE
            }
            alt="item.keyword"
            key={item.id}
            onClick={() => handleSelectKeyword(item.keyword)}
          />
        ))}
      </div>
      <Button
        category="confirm"
        text="키워드 선택하기"
        margin="2.75rem 0 0 0"
        disabled={selectedKeywords.length > 2 ? false : true}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    &.guide_text {
      margin: 1.25rem 0 2.438rem 0;
      text-align: center;
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
  div {
    &.card_wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 0.625rem;
    }
  }
  img {
    &.card_image {
      width: 6.75rem;
      height: 6.75rem;
    }
  }
`;
