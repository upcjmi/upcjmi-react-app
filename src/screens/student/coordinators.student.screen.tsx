import React, {useEffect, useState,FC} from 'react';
import {Typography, Row, Col, Card} from 'antd';
import FormCreator from 'components/formCreator';
import {COURSES} from 'constants/formFields.constant';
import {getCoordinator} from 'helpers/api/core.api.helper';
import {CoordinatorCard} from 'components/CoordinatorCard';
import {ICoordinator} from '../../types/common.type';

const {Title} = Typography;

interface IProps {
}

// 83b36
const demo = {
  department: "3fc6d",
  email: "ashertoufeeq@gmail.com",
  id: 1,
  name: "Asher Toufeeq",
  phone: "9557807977",
  photo: "http://faisal-e8c0ea81.localhost.run/media/coordinator/Profile.jpeg",
  type: "S"
}


export const CoordinatorsScreen: FC<IProps> = () => {
  const [coordinator,setCoordinator] = useState<Array<ICoordinator> |undefined>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const getData = async (code:string) =>{
    const data = await getCoordinator(code)
    console.log(data,'data');
    setCoordinator(data);
  }

  const FORM = (
    // @ts-ignore
    <FormCreator
      formTemplate={(state: any, initialValues: any, extraValues: any, form: any) => [
        {
          ...COURSES(initialValues, form),
        },
      ]}

      submitButtonText='Search'
      onSubmit={async (objForm: any) => {
        setLoading(true)
        console.log(objForm.getFieldValue('course'))
        await getData(objForm.getFieldValue('course'));
        setLoading(false);
      }}
      formLayout={
        {
          layout:'inline'
        }
      }
    />
  );
  return(
    <div className='container white lighten-3'>
      <Row gutter={32}>
        <Col sm={24} md={16}>
          <Title level={2}>Find Your Placement Coordinators</Title>
        </Col>
        <Col sm={24} md={8}>
          {FORM}
        </Col>
      </Row>
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {coordinator?coordinator.map((Item)=>(
          <CoordinatorCard {...Item} key={Item.id} />
        )):
          null}

      </div>
    </div>
  )
}
export default CoordinatorsScreen;
