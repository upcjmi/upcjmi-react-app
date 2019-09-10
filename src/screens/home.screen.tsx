import React, {FC} from 'react';

import Typography from 'antd/es/typography';
import Tag from 'antd/es/tag';

import OverlayCarousel from '../components/overlayCarousel';

import '../styles/home.scss';

import {HOME_CAROUSEL} from '../constants/carousel/home';
import {BADGES} from '../constants/badges';
import ContactScreen from './contact.screen';

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

    <div className="badge-container">
      {BADGES.map(({badge, info}, index) => (
        <div key={index.toString()}>
          <img src={badge} alt={info} title={info} />
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
      carousel={{dotPosition: 'left'}}
    />
    <ContactScreen />
  </>
);

export default HomeScreen;
