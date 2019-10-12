import React, {FC} from 'react';
import {Typography, Row, Col, Avatar} from 'antd';
import {selectScreen} from '../../../helpers/screen.helper';
import {GetProfileIcon} from '../../../helpers/function.helper';

interface IProps {
  editable?: boolean;
}

const {Title, Text} = Typography;

const Resume: FC<IProps> = (props: IProps) => (
  <div>
    <Row>
      <Col sm={24} md={12}>
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              textAlign: selectScreen('center', null),
              justifyContent: selectScreen('space-around', null),
            }}>
            <Avatar icon='user' size={64} />
            <div
              style={{
                marginLeft: selectScreen(0, 5, 10),
              }}>
              <Title className='margin-bottom-0'>Faisal Mazer</Title>
              <Text strong>An Undergraduate Technology Passionate.</Text>
            </div>
          </div>
        </div>
        <br />
        <div>
          <GetProfileIcon type='G' />
          &nbsp; Faisal-Manzer
        </div>
      </Col>
      <Col sm={24} md={12} className='align-justify'>
        <div className='align-right font-weight-bold'>B.Tech. Civil Engineering · 2nd year</div>
        Having a dream to create new technologies. Currently working with web development and app
        development. Successfully hosted web apps to the cloud and submitted mobile applications to
        Google PlayStore and Apple AppStore. Designing basic UI with the sketch app. Worked with
        digital marketing experts and created tools for them.
      </Col>
    </Row>
  </div>
);

export default Resume;
