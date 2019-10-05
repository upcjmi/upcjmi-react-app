import React, {FC} from 'react';
import Resume from '../../components/student/resume/resume';

interface IProps {}

// eslint-disable-next-line no-unused-vars
const ResumeStudentScreen: FC<IProps> = (props: IProps) => (
  <div className='container full-page' style={{backgroundColor: '#eee'}}>
    <Resume />
  </div>
);

export default ResumeStudentScreen;
