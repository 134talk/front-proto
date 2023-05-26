import { Card, NavBar } from 'components';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { KEYWORD_LIST } from 'shared/constants/constants';
import { styled } from 'styled-components';
import { Button } from 'ui';

export default function KeywordScreen() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const handleSelectKeyword = (keyword: string) => {
    if (selectedKeywords.length > 2 && !selectedKeywords.includes(keyword))
      toast.error('키워드는 3개 이상 선택할 수 없습니다.');
    else if (
      selectedKeywords.length < 3 &&
      !selectedKeywords.includes(keyword)
    ) {
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
          <Card
            key={item.id}
            keyword={item.keyword}
            type="keyword"
            fillColor="#D4D1FF"
            lightColor="#DF9EEC"
            darkColor="#D299FF"
            selected={selectedKeywords.includes(item.keyword) && true}
            onClick={() => handleSelectKeyword(item.keyword)}
          />
        ))}
      </div>
      <Button
        category="confirm"
        text="키워드 선택하기"
        disabled={selectedKeywords.length > 2 ? false : true}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
      row-gap: 1rem;
      margin-bottom: 6.25rem;
    }
  }
`;
