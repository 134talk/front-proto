import { useNavigate, useParams } from 'react-router-dom';
import { REPORT_CATEGORY } from 'shared/constants/constants';
import { RIGHT_ARROW } from 'shared/constants/icons';
import * as t from './reportBox.style';

export default function ReportBox() {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const handleRoute = (id: number) => navigate(`/report/${channelId}/${id}/3`);

  return (
    <>
      {REPORT_CATEGORY.map(({ id, title, title2, summary }) => (
        <t.Container key={id} onClick={() => handleRoute(id)}>
          <div>
            <p>{title}</p>
            <p>{title2 && title2}</p>
            <p className="summary">{summary}</p>
          </div>
          <img src={RIGHT_ARROW} alt="화살표" />
        </t.Container>
      ))}
    </>
  );
}
