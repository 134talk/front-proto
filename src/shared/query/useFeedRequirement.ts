import type { AxiosError, AxiosResponse } from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import {
  getFeedRequirement,
  postFeedRequirement,
  putFeedRequirement,
} from 'shared/api/reportApi';
import queryKeys from 'shared/constants/queryKeys';

export type Res = {
  name: string;
  nickname: string;
  remained_feedback: boolean;
  status_energy: number;
  status_relation: number;
  status_stable: number;
  status_stress: number;
};
type Req = {
  conversation_room_id: number;
  status_energy: number;
  status_relation: number;
  status_stable: number;
  status_stress: number;
};

export default function useFeedRequirement() {
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
          remained_feedback: data.data.remained_feedback,
        }
      : undefined;
  }, [data]);
  const feedRequirementData = useMemo(() => {
    return data?.data
      ? {
          status_energy: data.data.status_energy,
          status_relation: data.data.status_relation,
          status_stable: data.data.status_stable,
          status_stress: data.data.status_stress,
        }
      : undefined;
  }, [data]);

  const { mutate: postMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({
      conversation_room_id,
      status_energy,
      status_relation,
      status_stable,
      status_stress,
    }) =>
      postFeedRequirement(
        conversation_room_id,
        status_energy,
        status_relation,
        status_stable,
        status_stress
      ),
    {
      onSuccess: () => {
        window.location.href = '/chats';
      },
    }
  );

  const { mutate: putMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({
      conversation_room_id,
      status_energy,
      status_relation,
      status_stable,
      status_stress,
    }) =>
      putFeedRequirement(
        conversation_room_id,
        status_energy,
        status_relation,
        status_stable,
        status_stress
      ),
    {
      onSuccess: () => {
        window.location.href = '/chats';
      },
    }
  );
  return { feedRequirementUser, feedRequirementData, postMutate, putMutate };
}
