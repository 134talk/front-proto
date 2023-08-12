import { Bubble, SearchBar } from 'components';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { RIGHT_ARROW } from 'shared/constants/icons';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import { ProfileImg } from 'ui';
import * as t from './memberDetail.style';

export default function MemberDetail() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const { memberDataList: members, refetch } = useReport({
    types: 'list',
    keyword: keyword,
  });

  const onDelete = () => {
    setKeyword('');
    getMemberByKeyword();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    getMemberByKeyword();
  };

  const getMemberByKeyword = useCallback(
    debounce(() => refetch(), 500),
    [refetch]
  );

  const onDetail = (id: number, conversation_count: number) => {
    if (conversation_count > 0) navigate(`/report-detail/${id}`);
    else toast.error('대화 기록이 있는 팀원의 기록만 열람하실 수 있어요!');
  };

  return (
    <t.Container>
      <SearchBar
        keyword={keyword}
        handleSearch={handleSearch}
        onDelete={onDelete}
      />
      <t.Scroll $isMobile={isMobile}>
        {members?.map(
          ({ id, profile_image_url, nickname, name, conversation_count }) => (
            <Bubble
              key={id}
              isClickable
              onClick={() => onDetail(id, conversation_count)}
            >
              <section>
                <div className="userWrapper">
                  <ProfileImg size="3.25rem" image={profile_image_url} />
                  <div className="user">
                    <p>
                      {nickname}
                      <span>({name})</span>
                    </p>
                    <p className="subText">
                      대화 참여 횟수 : {conversation_count}번
                    </p>
                  </div>
                </div>
                <img src={RIGHT_ARROW} alt="화살표" />
              </section>
            </Bubble>
          )
        )}
      </t.Scroll>
    </t.Container>
  );
}
