import type React from 'react';
import { useMemo, useState } from 'react';

type Props = {
  userId: string;
  nickname: string;
  name: string;
}[];

export default function useSearchKeyword(userList: Props) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const filteredUserList = useMemo(
    () =>
      userList.filter(user => {
        if (keyword)
          return user.nickname.includes(keyword) || user.name.includes(keyword);
        return user;
      }),
    [userList, keyword]
  );

  return { handleSearch, filteredUserList };
}
