import { toast } from 'react-hot-toast';
import { silentRefresh } from 'shared/api/userApi';

export default function handleError(code: number) {
  switch (code) {
    case 1000:
    case 1001:
      silentRefresh().then(({ data }) =>
        sessionStorage.setItem('token', data?.accessToken)
      );
      break;

    case 1010:
    case 1011:
    case 1020:
      window.location.href = '/';
      break;

    case 1030:
      toast.error('입력하신 채널코드는 없는 채널코드입니다.');
      break;

    case 1031:
    case 1033:
    case 1034:
      toast.error('이미 등록된 회원입니다.');
      break;

    case 1032:
      toast.error('채널 관리자는 1명만 등록이 가능합니다.');
      break;

    case 2000:
      toast.error('대화는 최소 2인 이상 참여 가능합니다.');
      break;

    case 2001:
      toast.error('참여할 수 없는 대화방입니다.');
      break;

    case 2002:
      toast.error('존재하지 않는 대화방입니다.');
      break;

    case 4004:
      toast.error('이미 참여 중인 대화가 있습니다.');
      break;

    default:
      break;
  }
}
