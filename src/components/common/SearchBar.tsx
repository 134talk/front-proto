import { CANCEL_ICON, SEARCH_ICON } from 'shared/constants/icons';
import * as t from './searchBar.style';

type Props = {
  keyword?: string;
  onDelete?: () => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ keyword, handleSearch, onDelete }: Props) {
  return (
    <t.Container>
      <section className="icon_wrapper">
        <img src={SEARCH_ICON} alt="닉네임 또는 이름 검색" />
        <input
          type="text"
          placeholder="닉네임 또는 이름 검색"
          onChange={handleSearch}
          value={keyword}
        />
        <t.CancelButton iskeyword={!!keyword}>
          <img src={CANCEL_ICON} alt="취소" onClick={onDelete} />
        </t.CancelButton>
      </section>
    </t.Container>
  );
}
