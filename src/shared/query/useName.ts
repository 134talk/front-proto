import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getName } from 'shared/api/userApi';
import queryKeys from 'shared/constants/queryKeys';

export default function useName() {
  const { data } = useQuery([queryKeys.NAME], getName);
  const name = useMemo(() => data?.data.name, [data]);
  return name;
}
