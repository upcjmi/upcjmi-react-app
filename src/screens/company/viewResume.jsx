import React, {useState, useEffect} from 'react';
import Resume from '../../components/resume';
import {openNotificationWithIcon} from '../../helpers/notification.helper';
import {fetchStudentResume} from '../../helpers/api/company.api.helper';
import LoadingScreen from '../loading.screen';

let data = {};

function ViewResume({id}) {
  // const [data,changeData] = useState(JSON.stringify(''))
  const [loading,changeLoading] = useState(false)
  useEffect(()=>{
    const load = async () => {
      changeLoading(true)
      try {
        const res = await fetchStudentResume(3)
        data=res
        changeLoading(false);
      } catch (e) {
        openNotificationWithIcon(
          'warning',
          'Unknown error occurred',
          'Try signing out or refreshing page',
        );
        changeLoading(false)
      }
    };
    load();
  },[id])
  return (
    <div style={{padding:10}}>
      {loading?<LoadingScreen />:<Resume editable={false} data={data} />}
    </div>
  );
}

export default ViewResume;
