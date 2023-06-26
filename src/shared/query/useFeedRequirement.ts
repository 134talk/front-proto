import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getFeedRequirement, postFeedRequirement } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

type Res = {
  userName: string;
  nickname: string;
  today: boolean;
  statusEnergy: number;
  statusRelation: number;
  statusStress: number;
  statusStable: number;
};
type Req = {
  roomId: string;
  statusEnergy: number;
  statusRelation: number;
  statusStress: number;
  statusStable: number;
};

export default function useFeedRequirement() {
  const { data } = useQuery<AxiosResponse<Res[]>, AxiosError>(
    [queryKeys.FEEDREQUIREMENT],
    () => getFeedRequirement()
  );
  const feedRequirement = useMemo(() => data?.data || [], [data]);

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ roomId, statusEnergy, statusRelation, statusStress, statusStable }) =>
      postFeedRequirement(
        roomId,
        statusEnergy,
        statusRelation,
        statusStress,
        statusStable
      )
  );
  return { feedRequirement, mutate };
}
