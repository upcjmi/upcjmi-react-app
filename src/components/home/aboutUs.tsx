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
          The University Placement Cell is the institutionalized mechanism for providing training
          and placement opportunities to the students. Its hierarchical structure identifies
          placement coordinators at the faculty, department and student level. This forms the
          placement committee which works towards strengthening the Industry-University interaction
          and training & placement of students.
          <br />
          The placement cell organizes various sessions on career development, resume writing, mock
          interviews, aptitude test workshops, internship fairs, pre-placement training and seminars
          on generic issues for the overall development of students. Presently the UPC coordinates
          with teacher placement coordinators and student placement coordinators from various
          departments across the university.
        </Col>
        <Col sm={24} md={6} className='center'>
          <img src={JamiaLogo} alt='University Placement Cell, Logo' className='jmi-logo1' />
        </Col>
      </Row>
      <br />
      <br />
      <Title>Our Vision</Title>
      <Row>
        <Col sm={24} md={18} className='about-us-col'>
          To become a leading centre for support and facilitate the transformation of students into
          good human beings and competent professionals.
        </Col>
      </Row>
      <br />
      <br />
      <Title>Our Mission</Title>
      <Row>
        <Col sm={24} md={18} className='about-us-col'>
          To provide a platform towards the right career and building visionaries and leaders for
          the nation. To increase the visibility of academic programs globally and attract corporate
          at all levels.
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
                style={{maxHeight: selectScreen('30px', '30px', '50px', '80px')}}
              />
            </div>
            <div className='column align-center flex-8 justify-center p-2'>
              <text>
                In its centenary year, Jamia Millia Islamia has featured in the top ten list of
                National Institutional Ranking Framework (NIRF) 2020. I take pride as the
                Vice-Chancellor in informing you that Jamia Millia Islamia is progressing leaps and
                bounds in academics, research, placements, and strengthening of infrastructure for
                gaining a universal identity.
                <br />
                <br />
                I am pleased to invite public offices to extend the opportunities of
                internships/fellowships to our students from different areas of study, for
                internship opportunities at ministries of the Government of India. Working with
                these offices would lead to great exposure for students to understand more about
                issues, challenges, policies, schemes, and projects. There are issues ranging from
                health, law, human rights, and climate change to development issues and
                entrepreneurship which the students would be able to comprehend.
                <br />
                <br />
                It will also prove to be an opportunity for them to further employment prospects in
                various organizations and help them to acquire admissions for higher studies at
                reputed universities within the country as well as abroad. Experiential learning
                will be enabled through blended learning methodologies. Getting familiar with the
                functions of various government offices would groom them for working towards the
                welfare of the people and in turn develop them towards society and nation-building.
                <br />
                <br />
                While we keep evolving with new research, academic standards, and excellent faculty,
                we hope that our students will make good use of this internship opportunity to
                broaden their professional acumen. I am confident that this would be a step towards
                engaging them in focused professional pursuits. I am looking forward to a strong
                association with various offices of Govt. of India in engaging our students as
                fellows/interns
              </text>
            </div>
            <div className='row align-end flex-1 justify-center'>
              <img
                src={rightQuote}
                alt='Quote Right'
                style={{maxHeight: selectScreen('30px', '30px', '50px', '80px')}}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default AboutUs;
