import React, {FC} from 'react';
import Resume from '../../components/student/resume/resume';

interface IProps {}

const ResumeStudentScreen: FC<IProps> = () => (
  <div className='container full-page grey lighten-3'>
    <Resume />
  </div>
);

export default ResumeStudentScreen;
