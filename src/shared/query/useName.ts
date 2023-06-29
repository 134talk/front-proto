import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getName } from 'shared/api/userApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  name: string;
};

export default function useName() {
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.NAME],
    getName
  );
  const name = useMemo(() => data?.data.name, [data]);
  return name;
}
