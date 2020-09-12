import React, {FC} from 'react';
import {Typography, Row, Col} from 'antd';
import {ABOUT_US_PEOPLE} from 'constants/home/people.home.constant';
import {selectScreen} from '../../helpers/screen.helper';

const JamiaLogo = require('assets/svgs/jamia-logo.svg');
const leftQuote = require('assets/svgs/quote-left-solid.svg');
const rightQuote = require('assets/svgs/quote-right-solid.svg');

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
        <Col sm={24} md={8} className='center'>
          <img src={ABOUT_US_PEOPLE[0].image} alt={ABOUT_US_PEOPLE[0].name} />
          <br />
          <Title level={3}>{ABOUT_US_PEOPLE[0].name}</Title>
          {ABOUT_US_PEOPLE[0].position}
          ,
          <br />
          Jamia Millia Islamia
        </Col>
        <Col sm={24} md={16}>
          <div className='row w-100 my-2'>
            <div className='row align-start flex-1 justify-center'>
              <img
                src={leftQuote}
                alt='Quote Left'
                style={{maxHeight: selectScreen('30px', '30px', '50px','80px')}} />
            </div>
            <div className='column align-center flex-8 justify-center p-2'>
              <text>
                Jamia Millia Islamia made a modest beginning in 1920 at Aligarh, with the resolute
                determination of its founding members--Shaikhul Hind Maulana Mahmud Hasan, Maulana
                Muhammad Ali Jauhar, Jenab Hakim Ajmal Khan, Dr. Mukhtar Ahmad Ansari, Jenab Abdul
                Majeed Khwaja, and Dr. Zakir Hussain to create an institution that would manifest
                indigenous ethos and spirit of plurality. It was conceived as a national institution
                that would offer progressive education and nationalist ideals to students from all
                communities, particularly the Muslims. The emergence of Jamia was supported by
                Gandhiji and Tagore who felt that Jamia could shape lives of hundreds and thousands
                of students on the basis of a shared culture and worldview. Jamia’s development is
                marked by sacrifices made by the staff and students and a host of individuals who
                contributed through myriad efforts.
              </text>
            </div>
            <div className='row align-end flex-1 justify-center'>
              <img
                src={rightQuote}
                alt='Quote Right'
                style={{maxHeight: selectScreen('30px', '30px', '50px','80px')}}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default AboutUs;
