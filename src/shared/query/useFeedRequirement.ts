import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getFeedRequirement, postFeedRequirement } from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

export type Res = {
  name: string;
  nickname: string;
  today: boolean;
  statusEnergy: number;
  statusRelation: number;
  statusStress: number;
  statusStable: number;
};
type Req = {
  roomId: number;
  statusEnergy: number;
  statusRelation: number;
  statusStress: number;
  statusStable: number;
};

export default function useFeedRequirement() {
  const navigate = useNavigate();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.FEED_REQUIREMENT],
    () => getFeedRequirement()
  );
  const feedRequirement = useMemo(() => data?.data || undefined, [data]);

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ roomId, statusEnergy, statusRelation, statusStress, statusStable }) =>
      postFeedRequirement(
        roomId,
        statusEnergy,
        statusRelation,
        statusStress,
        statusStable
      ),
    {
      onSuccess: () => {
        navigate('/chats');
      },
    }
  );
  return { feedRequirement, mutate };
}
