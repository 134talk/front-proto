import { SEARCH_ICON } from 'shared/constants/icons';
import { styled } from 'styled-components';

type Props = {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ handleSearch }: Props) {
  return (
    <Container>
      <input
        type="text"
        placeholder="닉네임 또는 이름 검색"
        onChange={handleSearch}
      />
      <img src={SEARCH_ICON} alt="닉네임 또는 이름 검색" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 0.75rem;
  input {
    width: 100%;
    height: 2.75rem;
    padding: 0.75rem;
    padding-left: 2.75rem;
    border-radius: 8px;
    border: solid 1px #d5dae0;
    &::placeholder {
      color: #a6acb2;
    }
  }
  img {
    position: absolute;
    top: 0.62rem;
    left: 0.75rem;
  }
`;
