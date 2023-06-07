import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getTeam } from 'shared/api/chatApi';
import queryKeys from 'shared/constants/queryKeys';

export default function useTeam() {
  const { data } = useQuery([queryKeys.TEAM], getTeam);
  const teamList = useMemo(() => data?.data, [data]);
  return { teamList };
}
