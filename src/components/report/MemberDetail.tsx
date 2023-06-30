import { Bubble, SearchBar } from 'components';
import { useNavigate } from 'react-router-dom';
import { RIGHT_ARROW } from 'shared/constants/icons';
import useSearchKeyword from 'shared/hooks/useSearchKeyword';
import { ProfileImg } from 'ui';
import * as t from './memberDetail.style';

export default function MemberDetail() {
  const navigate = useNavigate();

  const members = [{ userId: 1, nickname: '', name: '', profileUrl: '' }];
  const { keyword, onDelete, handleSearch } = useSearchKeyword(members);

  const onDetail = (uid: string) => navigate(`/report-detail/${uid}`);

  return (
    <t.Container>
      <SearchBar
        keyword={keyword}
        handleSearch={handleSearch}
        onDelete={onDelete}
      />
      <div className="wrapper">
        <Bubble isClickable onClick={() => onDetail('1')}>
          <section>
            <div className="userWrapper">
              <ProfileImg size="3.25rem" />
              <div className="user">
                <p>
                  들썩이는 매의 일격<span>(해솔)</span>
                </p>
                <p className="subText">대화 참여 횟수 : 1번</p>
              </div>
            </div>
            <img src={RIGHT_ARROW} alt="화살표" />
          </section>
        </Bubble>
      </div>
    </t.Container>
  );
}
