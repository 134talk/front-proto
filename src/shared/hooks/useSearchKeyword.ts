import type React from 'react';
import { useMemo, useState } from 'react';

type Props = {
  id: number;
  nickname: string;
  name: string;
  profile_image_url: string;
}[];

export default function useSearchKeyword(userList: Props) {
  const [keyword, setKeyword] = useState('');

  const onDelete = () => setKeyword('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const filteredUserList = useMemo(
    () =>
      userList?.filter(user => {
        if (keyword)
          return user.nickname.includes(keyword) || user.name.includes(keyword);
        return user;
      }),
    [userList, keyword]
  );

  return { keyword, onDelete, handleSearch, filteredUserList };
}
