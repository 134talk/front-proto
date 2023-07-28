import { useEffect, useState } from 'react';
import useTeam from 'shared/query/useTeam';
import useUserData from './useUserData';

export default function useSortedMembers() {
  const { teamList } = useTeam();
  const [myProfile, setMyProfile] = useState({});
  const [teamListExceptMe, setTeamListExceptMe] = useState([]);

  const { uId } = useUserData();

  useEffect(() => {
    setMyProfile(teamList?.find(({ userId }) => String(userId) === uId));
    setTeamListExceptMe(
      teamList?.filter(({ userId }) => String(userId) !== uId) || []
    );
  }, [teamList, uId]);

  return [myProfile, ...teamListExceptMe];
}
