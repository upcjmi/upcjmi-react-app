import React, {FC, useState, useEffect} from 'react';
import {Typography, Skeleton, Card, Empty} from 'antd';
// import Resume from '../../components/student/resume/resume';
import {openNotificationWithIcon} from 'helpers/notification.helper';
import {getStudentResume, updateStudnetResume} from 'helpers/api/student.api.helper';
import Resume from '../../components/resume';

const {Title} = Typography;

interface IProps {
  datax: any;
  data: any;
}

// const ResumeStudentScreen: FC<IProps> = () => {
// const [data, setdata] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const load = async () => {
//     const data = await getStudentResume();
//     // @ts-ignore
//     setdata(data);
//     setLoading(false);
//   };

//   load();
// }, []);

// const json={ "old":{"basics": { "name": "John Doe c", "picture": "", "email": "john@gmail.com", "phone": "(912) 555-4321", "summary": "A summary of John Doe...", "location": "ambari", }, "work": [{ "company": "Company", "designation": "", "companyLocation": "","startDate": "2013-01-01", "endDate": "2014-01-01", "summary": "Description...", }], "skills": [{ "name": "Web Development", "level": "4" }], "achievements": { "innerText": "got jmi" },"links": [{"type":"github","url":"https://github.com/asdf" },{ "type":"Stackoverflow","url": "https://stackoverflow.com/asdf" },{ "type":"LinkedIn","url": "https://linkedin.com/asdf" },{ "type":"type","url": "https://asdf.com/asdf" }], "education": [{ "institution": "University", "studyType": "Bachelor",  "year": "2013-01-01", "grade": "4.0", }], "languages": { "language": "English" }, "hobby": { "innerText": "i dont have any" }} }

// console.log(getStudentResume())

const ResumeStudentScreen: FC<IProps> = ({datax}) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getStudentResume();
        // @ts-ignore
        setdata(JSON.parse(data));

        setLoading(false);
      } catch (e) {
        openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
      }
    };
    load();
  }, []);
  const update = async (x: any) => {
    try {
      const data = await updateStudnetResume(x);
      if ((data.detail = 'Resume saved')) {
        openNotificationWithIcon('success', 'Updated successfully');
      } else {
        openNotificationWithIcon('error', 'somthing went wrong', 'Try refreshing your page');
      }
    } catch (e) {
      openNotificationWithIcon('error', 'An error occurred', 'Try refreshing your page');
    }
  };
  if (loading)
    return (
      <Card>
        <Skeleton active />
      </Card>
    );
  return (
    <div className='container full-page '>
      {/* {console.log({"old":data})} */}
      <Resume
        data={data}
        editable
        onSave={(data: any) => {
          update(data);
        }}
      />
    </div>
  );
};
export default ResumeStudentScreen;
