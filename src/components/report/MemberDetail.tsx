import { Bubble, NoData, SearchBar } from 'components';
import { debounce } from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RIGHT_ARROW } from 'shared/constants/icons';
import useReport from 'shared/query/useReport';
import isMobile from 'shared/utils/deviceDetector';
import { ProfileImg } from 'ui';
import * as t from './memberDetail.style';

export default function MemberDetail() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const { memberDataList, refetch } = useReport({
    types: 'list',
    keyword: keyword,
  });

  const members = useMemo(() => memberDataList?.data, [memberDataList]);

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

  const onDetail = (uid: string) => navigate(`/report-detail/${uid}`);

  return (
    <t.Container>
      {!members?.length ? (
        <NoData />
      ) : (
        <>
          <SearchBar
            keyword={keyword}
            handleSearch={handleSearch}
            onDelete={onDelete}
          />
          <t.Scroll $isMobile={isMobile}>
            {members?.map(
              ({ userId, profileUrl, nickname, name, chatCount }) => (
                <Bubble
                  key={userId}
                  isClickable
                  onClick={() => onDetail(`${userId}`)}
                >
                  <section>
                    <div className="userWrapper">
                      <ProfileImg size="3.25rem" image={profileUrl} />
                      <div className="user">
                        <p>
                          {nickname}
                          <span>({name})</span>
                        </p>
                        <p className="subText">
                          대화 참여 횟수 : {chatCount}번
                        </p>
                      </div>
                    </div>
                    <img src={RIGHT_ARROW} alt="화살표" />
                  </section>
                </Bubble>
              )
            )}
          </t.Scroll>
        </>
      )}
    </t.Container>
  );
}
