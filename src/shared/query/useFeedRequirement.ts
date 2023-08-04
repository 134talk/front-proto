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
  data: {
    status_id: number | null;
    name: string;
    nickname: string;
    remained_feedback: boolean;
    status_energy: number;
    status_relation: number;
    status_stable: number;
    status_stress: number;
  };
};
type Req = {
  status_id?: number;
  conversation_room_id: number;
  conversation_user_id: number;
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
          status_id: data.data.data.status_id,
          name: data.data.data.name,
          nickname: data.data.data.nickname,
          remained_feedback: data.data.data.remained_feedback,
        }
      : undefined;
  }, [data]);
  const feedRequirementData = useMemo(() => {
    return data?.data
      ? {
          status_energy: data.data.data.status_energy,
          status_relation: data.data.data.status_relation,
          status_stable: data.data.data.status_stable,
          status_stress: data.data.data.status_stress,
        }
      : undefined;
  }, [data]);

  const { mutate: postMutate } = useMutation<AxiosResponse, AxiosError, Req>(
    ({
      conversation_room_id,
      conversation_user_id,
      status_energy,
      status_relation,
      status_stable,
      status_stress,
    }) =>
      postFeedRequirement(
        conversation_room_id,
        conversation_user_id,
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
      status_id,
      conversation_room_id,
      conversation_user_id,
      status_energy,
      status_relation,
      status_stable,
      status_stress,
    }) =>
      putFeedRequirement(
        status_id,
        conversation_room_id,
        conversation_user_id,
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
