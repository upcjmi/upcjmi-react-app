import React, {FC} from 'react';
import {Tag, Typography} from 'antd';
import {Link} from 'react-router-dom';

import OverlayCarousel from 'components/overlayCarousel';
import AboutUs from 'components/home/aboutUs';
import {HOME_CAROUSEL} from 'constants/home/carousel.home.constant';
import {BADGES} from 'constants/home/badges.home.constant';
import TopRecruiters from 'components/home/topRecruiters';

import {selectScreen} from 'helpers/screen.helper';
import {PORTAL_HOME_PATH, STUDENT_PORTAL_HOME_PATH} from 'constants/routes/main.paths.constant';

import ContactScreen from './contact.screen';

interface IProps {}

const {Title} = Typography;

const quickLink = (
  <div className='space-child'>
    <Title level={4} style={{color: '#eeeeee', display: 'inline-block'}}>
      Quick Links:
    </Title>
    <Link to={`${STUDENT_PORTAL_HOME_PATH}courses/`} style={{color: '#cccccc'}}>
      Courses Offered &nbsp;
      <Tag color='#87d068'>New</Tag>
    </Link>
    <Link to={`${STUDENT_PORTAL_HOME_PATH}jobs/`} style={{color: '#cccccc'}}>
      Jobs &nbsp;
      <Tag color='#87d068'>New</Tag>
    </Link>
    <Link to={`${STUDENT_PORTAL_HOME_PATH}internships/`} style={{color: '#cccccc'}}>
      Internships &nbsp;
      <Tag color='#87d068'>New</Tag>
    </Link>
    <br />
    <Link to={PORTAL_HOME_PATH} style={{color: '#CCC'}}>
      Placements and Internship Portal
    </Link>
  </div>
);

const CarouselOverlayComponent = () => (
  <>
    {quickLink}
    <div className='welcome-text'>
      <Title level={2}>Welcome to,</Title>
      <Title>
        University Placement Cell
        <br />
        <p>Jamia Millia Islamia</p>
      </Title>
    </div>

    <div className='badge-container' style={{display: selectScreen('none', 'none', null)}}>
      {BADGES.map(({badge, info}, index) => (
        <div key={index.toString()}>
          <img src={badge} alt={info} title={info} className='responsive-img' />
        </div>
      ))}
    </div>
  </>
);

const HomeScreen: FC<IProps> = () => (
  <>
    <OverlayCarousel
      overlay={CarouselOverlayComponent}
      images={HOME_CAROUSEL}
      carousel={{dotPosition: 'bottom'}}
    />
    <AboutUs />
    <TopRecruiters />
    <ContactScreen />
  </>
);

export default HomeScreen;
