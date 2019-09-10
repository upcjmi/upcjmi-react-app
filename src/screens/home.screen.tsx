import React, {FC} from 'react';
import {Tag, Typography} from 'antd';

import OverlayCarousel from '../components/overlayCarousel';

import '../styles/home.scss';

import {HOME_CAROUSEL} from '../constants/carousel/home.constant';
import {BADGES} from '../constants/home/badges.constant';
import ContactScreen from './contact.screen';
import AboutUs from '../components/home/aboutUs';
import TopRecruiters from '../components/home/topRecruiters';
import {selectScreen} from '../helpers/screen';

interface IProps {}

const {Title} = Typography;

const CarouselOverlayComponent = () => (
  <>
    <div className="space-child">
      <Title level={4} style={{color: '#EEE', display: 'inline-block'}}>
        Quick Links:
      </Title>
      <a href="#!" style={{color: '#CCC'}}>
        Courses Offered &nbsp;
        <Tag color="#87d068">New</Tag>
      </a>
      <a href="#!" style={{color: '#CCC'}}>
        Placements and Internship Portal
      </a>
    </div>

    <div className="welcome-text">
      <Title level={2}>Welcome to,</Title>
      <Title>
        University Placement Cell
        <br />
        <p>Jamia Millia Islamia</p>
      </Title>
    </div>

    <div className="badge-container" style={{display: selectScreen('none', 'none', null)}}>
      {BADGES.map(({badge, info}, index) => (
        <div key={index.toString()}>
          <img src={badge} alt={info} title={info} className="responsive-img" />
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
