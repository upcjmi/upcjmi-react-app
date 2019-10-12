import React, {FC} from 'react';
import {Typography, Row, Col} from 'antd';
import {ABOUT_US_PEOPLE} from 'constants/home/people.home.constant';

const JamiaLogo = require('assets/svgs/jamia-logo.svg');

interface IProps {}

const {Title} = Typography;

const AboutUs: FC<IProps> = () => (
  <div id='about-us' className='container full-page center-hv grey lighten-3'>
    <div>
      <Title>About Us</Title>
      <Row>
        <Col sm={24} md={18} className='about-us-col'>
          Jamia Millia Islamia was founded at Aligarh in the United Province, India in 1920 during
          the Khilafat and &nbsp;
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Non-Cooperation Movement in response to Gandhiji's call to boycott government supported
          educational institutions. JMI moved from Aligarh to Delhi in the year 1925 and was made a
          central university by Parliamentary act of 1988. Today, Jamia Millia Islamia is one of the
          most prominent and promising central university of the country. &nbsp;
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          JMI was recently awarded an 'A' Grade by NAAC (National Assessment and Accreditation
          Council).
        </Col>
        <Col sm={24} md={6} className='center'>
          <img src={JamiaLogo} alt='University Placement Cell, Logo' className='jmi-logo1' />
        </Col>
      </Row>

      <br />
      <br />
      <br />

      <Row>
        {ABOUT_US_PEOPLE.map(({image, name, position}, index) => (
          <Col sm={24} md={8} className='center' key={index.toString()}>
            <img src={image} alt={name} />
            <br />
            <Title level={3}>{name}</Title>
            {position}
            ,
            <br />
            Jamia Millia Islamia
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default AboutUs;
