import { useEffect, useState } from 'react';
import useTeam from 'shared/query/useTeam';

export default function useSortedMembers() {
  const { teamList } = useTeam();
  const [myProfile, setMyProfile] = useState({});
  const [teamListExceptMe, setTeamListExceptMe] = useState([]);

  const uid = localStorage.getItem('uid');

  useEffect(() => {
    setMyProfile(teamList?.find(({ userId }) => String(userId) === uid));
    setTeamListExceptMe(
      teamList?.filter(({ userId }) => String(userId) !== uid) || []
    );
  }, [teamList, uid]);

  return [myProfile, ...teamListExceptMe];
}
