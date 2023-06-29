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
import useSortedMembers from 'shared/hooks/useSortedMembers';
import useChatInvitation from 'shared/query/useChatInvitation';
import { Button, Chip } from 'ui';
import * as t from './createModal.style';

type Props = {
  handleCreateModal: () => void;
};

export default function CreateModal({ handleCreateModal }: Props) {
  const members = useSortedMembers();

  const { keyword, handleSearch, filteredUserList, onDelete } =
    useSearchKeyword(members);

  const mutate = useChatInvitation();

  const [selectedIdList, setSelectedIdList] = useState<number[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<
    { userId: number; name: string }[]
  >([]);

  const handleSelectedIdList = (selectedId: number) => {
    if (selectedIdList.includes(selectedId))
      setSelectedIdList(prevList => prevList.filter(id => id !== selectedId));
    else if (selectedIdList.length < 5)
      setSelectedIdList(prevList => [selectedId, ...prevList]);
  };

  const handleSelectedMembers = (selectedId: number, selectedName: string) => {
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

  const handleClick = (userId: number, name: string) => {
    handleSelectedIdList(userId);
    handleSelectedMembers(userId, name);
  };

  const handleDelete = (selectedId: number) => {
    setSelectedMembers(prevList =>
      prevList.filter(member => member.userId !== selectedId)
    );
    setSelectedIdList(prevList => prevList.filter(id => id !== selectedId));
  };

  const onConfirm = () => {
    if (selectedIdList.length >= 2) {
      mutate(selectedIdList);
      handleCreateModal();
    } else toast.error('대화는 최소 2인 이상 참여 가능합니다.');
  };
  return (
    <>
      <FullModal>
        <t.Container>
          <NavBar
            isMargin
            title="대화 초대"
            cnt={selectedIdList?.length.toString()}
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
                {filteredUserList.map(
                  ({ userId, nickname, name, profileUrl }) => (
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
                        image={profileUrl}
                      />
                      {selectedIdList?.includes(userId) && (
                        <img src={CHECK_ICON} alt="선택" />
                      )}
                    </div>
                  )
                )}
              </>
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </section>
        </t.Container>
      </FullModal>
      <BottomButtonTab>
        <Button text="대화 초대하기" category="confirm" onClick={onConfirm} />
      </BottomButtonTab>
    </>
  );
}
