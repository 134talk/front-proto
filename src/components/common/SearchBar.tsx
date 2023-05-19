import { SEARCH_ICON } from 'shared/constants/icons';
import * as t from './searchBar.style';

type Props = {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ handleSearch }: Props) {
  return (
    <t.Container>
      <input
        type="text"
        placeholder="닉네임 또는 이름 검색"
        onChange={handleSearch}
      />
      <img src={SEARCH_ICON} alt="닉네임 또는 이름 검색" />
    </t.Container>
  );
}
