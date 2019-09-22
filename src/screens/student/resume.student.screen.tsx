import React, {FC} from 'react';
import {Typography, Card, Col, Row, Avatar, Icon, Tag, Button} from 'antd';

import {selectScreen} from '../../helpers/screen.helper';
// @ts-ignore
import {ReactComponent as StackOverflowIcon} from '../../assets/svgs/stackoverflow-icon.svg';

interface IProps {
}


const {Title, Text, Paragraph} = Typography;
const ResumeStudentScreen: FC<IProps> = (props: IProps) => (
  <div className='container full-page' style={{backgroundColor: '#eee'}}>
    <Row gutter={24}>
      <Col sm={24} md={12}>
        <Card>
          <div style={{display: 'flex'}}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              textAlign: selectScreen('center', null),
              justifyContent: selectScreen('space-around', null)
            }}>
              <Avatar icon='user' size={64} />
              <div style={{
                marginLeft: selectScreen(0, 5, 10)
              }}>
                <Title style={{marginBottom: 0}}>
                  Faisal Manzer
                </Title>
                <Text strong>
                  An Undergraduate technology passionate.
                </Text>
              </div>
            </div>
          </div>
          <br />
          <Paragraph type='secondary'>
            Edit your summary by clicking on the edit icon.
            Summary should only be one paragraph long.
          </Paragraph>
          <br />
          <div
            style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 30,
            color: '#666'
          }}
          >
            <Icon
              type='phone'
              theme='filled'
            />
            <Icon
              type='mail'
              theme='filled'
              style={{
                marginLeft: 15
              }} />
            <Icon
              type='github'
              style={{
                marginLeft: 15
              }} />
            <Icon
              type='behance-circle'
              theme='filled'
              style={{
                marginLeft: 15
              }} />
            <StackOverflowIcon style={{
              fill: '#595959',
              height: 30,
              width: 30,
              marginLeft: 15
            }} />
            <Icon
              type='medium-circle'
              theme='filled'
              style={{
                marginLeft: 15
              }} />
            <Icon
              type='linkedin'
              theme='filled'
              style={{
                marginLeft: 15
              }} />
            <Icon
              type='link'
              style={{
                marginLeft: 15
              }} />
          </div>
          <br />
          <div>
            <Tag>Django</Tag>
            <Tag>HTML</Tag>
            <Tag>AWS</Tag>
            <Tag>React Native</Tag>
            <Button style={{float: 'right'}} type='link'>
              <Icon type='edit' />
              Edit
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);


export default ResumeStudentScreen;
