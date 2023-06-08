import { Background, NavBar, ReportBox } from 'components';
import * as t from './reportPage.style';

export default function ReportPage() {
  return (
    <>
      <NavBar isCenter={true} title="리포트" />
      <t.Container>
        <Background />
        <div className="wrapper">
          <ReportBox />
        </div>
      </t.Container>
    </>
  );
}
