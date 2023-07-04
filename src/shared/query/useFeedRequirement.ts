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
  statusStable: number;
  statusStress: number;
};
type Req = {
  roomId: number;
  statusEnergy: number;
  statusRelation: number;
  statusStable: number;
  statusStress: number;
};

export default function useFeedRequirement() {
  const navigate = useNavigate();
  const { data } = useQuery<AxiosResponse<Res>, AxiosError>(
    [queryKeys.FEED_REQUIREMENT],
    () => getFeedRequirement(),
    { refetchOnWindowFocus: false }
  );
  const feedRequirementUser = useMemo(() => {
    return data?.data
      ? {
          name: data.data.name,
          nickname: data.data.nickname,
          today: data.data.today,
        }
      : undefined;
  }, [data]);
  const feedRequirementData = useMemo(() => {
    return data?.data
      ? {
          statusEnergy: data.data.statusEnergy,
          statusRelation: data.data.statusRelation,
          statusStable: data.data.statusStable,
          statusStress: data.data.statusStress,
        }
      : undefined;
  }, [data]);

  const { mutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({ roomId, statusEnergy, statusRelation, statusStable, statusStress }) =>
      postFeedRequirement(
        roomId,
        statusEnergy,
        statusRelation,
        statusStable,
        statusStress
      ),
    {
      onSuccess: () => {
        navigate('/chats');
      },
    }
  );
  return { feedRequirementUser, feedRequirementData, mutate };
}
