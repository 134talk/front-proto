import { KeywordList, NavBar } from 'components';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { KEYWORD_LIST } from 'shared/constants/constants';
import { Button } from 'ui';
import * as t from './keywordScreen.style';

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
    <t.Container>
      <NavBar isCenter={true} title="대화방" />
      <p className="guide_text">키워드 3개를 선택해주세요.</p>
      <div className="card_wrapper">
        {KEYWORD_LIST.map(item => (
          <KeywordList
            key={item.id}
            keyword={item.keyword}
            lineColor={item.color[0]}
            fillColor={item.color[1]}
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
    </t.Container>
  );
}
