import {
  BottomButtonTab,
  FullModal,
  NavBar,
  Profile,
  SearchBar,
} from 'components';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CHECK_ICON } from 'shared/constants/icons';
import useSearchKeyword from 'shared/hooks/useSearchKeyword';
import { Button, Chip } from 'ui';
import * as t from './createModal.style';

type Props = {
  handleCreateModal: () => void;
};

export default function CreateModal({ handleCreateModal }: Props) {
  const { keyword, handleSearch, filteredUserList, onDelete } =
    useSearchKeyword(TEST_USER);

  const [selectedIdList, setSelectedIdList] = useState<string[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<
    { userId: string; name: string }[]
  >([]);

  const handleSelectedIdList = (selectedId: string) => {
    if (selectedIdList.includes(selectedId))
      setSelectedIdList(prevList => prevList.filter(id => id !== selectedId));
    else if (selectedIdList.length < 5)
      setSelectedIdList(prevList => [selectedId, ...prevList]);
  };

  const handleSelectedMembers = (selectedId: string, selectedName: string) => {
    const isMemeber = selectedMembers.find(
      member => member.userId === selectedId
    );
    if (isMemeber) handleDelete(selectedId);
    else {
      if (selectedIdList.length >= 5)
        toast.error('대화는 최대 5인까지 참여 가능합니다.');
      else
        setSelectedMembers(prevList => [
          { userId: selectedId, name: selectedName },
          ...prevList,
        ]);
    }
  };

  const handleClick = (userId: string, name: string) => {
    handleSelectedIdList(userId);
    handleSelectedMembers(userId, name);
  };

  const handleDelete = (selectedId: string) => {
    setSelectedMembers(prevList =>
      prevList.filter(member => member.userId !== selectedId)
    );
    setSelectedIdList(prevList => prevList.filter(id => id !== selectedId));
  };

  return (
    <>
      <FullModal>
        <t.Container>
          <NavBar
            isCenter={false}
            title="대화 초대"
            cnt={selectedIdList.length.toString()}
            button="닫기"
            handleClose={handleCreateModal}
          />
          <div className="chipWrapper">
            {selectedMembers.map(({ userId, name }) => (
              <Chip
                text={name}
                isDelete={true}
                key={userId}
                onDelete={() => handleDelete(userId)}
              />
            ))}
          </div>
          <SearchBar
            keyword={keyword}
            handleSearch={handleSearch}
            onDelete={onDelete}
          />
          <section>
            {filteredUserList.length ? (
              <>
                {filteredUserList.map(({ userId, nickname, name }) => (
                  <div
                    className="profileWrapper"
                    key={userId}
                    onClick={() => handleClick(userId, name)}
                  >
                    <Profile
                      scale="medium"
                      userId={userId}
                      nickname={nickname}
                      name={name}
                    />
                    {selectedIdList.includes(userId) && (
                      <img src={CHECK_ICON} alt="선택" />
                    )}
                  </div>
                ))}
              </>
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </section>
        </t.Container>
      </FullModal>
      <BottomButtonTab>
        <Button text="대화 초대하기" category="confirm" />
      </BottomButtonTab>
    </>
  );
}

const TEST_USER = [
  {
    userId: '1',
    nickname: '떠오르는 매의 날갯짓',
    name: '차정원',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '2',
    nickname: '떠오르는 매의 날갯짓',
    name: '차정원',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '3',
    nickname: '떠오르는 매의 날갯짓',
    name: '김성남',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '4',
    nickname: '떠오르는 매의 날갯짓',
    name: '김수진',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '5',
    nickname: '떠오르는 매의 날갯짓',
    name: '고지섭',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '6',
    nickname: '떠오르는 매의 날갯짓',
    name: '여민구',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '7',
    nickname: '떠오르는 매의 날갯짓',
    name: '서도원',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '8',
    nickname: '떠오르는 매의 날갯짓',
    name: '최창식',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
  {
    userId: '9',
    nickname: '떠오르는 매의 날갯짓',
    name: '이민재',
    profileUrl:
      'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png',
  },
];
