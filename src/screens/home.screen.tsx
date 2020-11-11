import React, {FC, useEffect, useState} from 'react';
import {Skeleton, Tag, Typography, Card, Row, Col, Carousel} from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import OverlayCarousel from 'components/overlayCarousel';
import AboutUs from 'components/home/aboutUs';
import {HOME_CAROUSEL} from 'constants/home/carousel.home.constant';
import TopRecruiters from 'components/home/topRecruiters';
import {
  COORDINATORS,
  PORTAL_HOME_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from 'constants/routes/main.paths.constant';
import {Link} from 'react-router-dom';
import Notice from 'components/home/notice';
import {getBadges} from 'helpers/api/core.api.helper';
import {IRanking} from 'types/common.type';
import {BADGES} from 'constants/home/badges.home.constant';
import ContactScreen from './contact.screen';
import {TOP_RECRUITERS} from '../constants/home/topRecruiters.home.constant';
import {selectScreen} from '../helpers/screen.helper';
import PlacementProcess from '../components/home/placementProcess';

const JamiaLogo = require('assets/svgs/jamia-logo-white.svg');

interface IProps {}

const {Title} = Typography;

const quickLink = (
  <div className='space-child'>
    <Title level={4} className='grey-text lighten-3 inline-block'>
      Quick Links:
    </Title>
    <Link to={`${STUDENT_PORTAL_HOME_PATH}courses/`} className='linkType-1'>
      Courses Offered &nbsp;
      <Tag color='#87d068'>New</Tag>
    </Link>
    <Link to={`${STUDENT_PORTAL_HOME_PATH}recruitment/`} className='linkType-1'>
      Jobs &nbsp;
      <Tag color='#87d068'>New</Tag>
    </Link>
    <Link to={`${COORDINATORS}`} className='linkType-1'>
      Coordinators &nbsp;
      <Tag color='#87d068'>New</Tag>
    </Link>
    <br />
    <Link to={PORTAL_HOME_PATH} className='linkType-1'>
      Placements and Internship Portal
    </Link>
  </div>
);

const getBadgesArray = (arr: Array<any>) => {
  const newArr = [];
  // <<<<<<< HEAD
  //   for (let i = 0; i < arr.length; i += 4) {
  //     newArr.push(arr.slice(i, i + 4));
  //   }
  //   return newArr;
  // };
  // const Arrows = () => {
  //   return <div />;
  // };
  // =======
  const limit = selectScreen(1, 1, 2, 3);
  for (let i = 0; i < arr.length; i += limit) {
    newArr.push(arr.slice(i, i + limit));
  }

  return newArr;
};

const Arrows = () => {
  return <div />;
};

const TopRecruitersComp = () => (
  <Slider
    {...{
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: <Arrows />,
      prevArrow: <Arrows />,
    }}>
    {TOP_RECRUITERS.map((recruiter, index) => (
      <Col xs={24} md={8} className='center margin-bottom-20 margin-top-20' key={index.toString()}>
        <div className='row justify-center'>
          <img src={recruiter} alt='' className='image-top-recruiter' />
        </div>
      </Col>
    ))}
  </Slider>
);

const CarouselOverlayComponent = () => {
  const [apiBadges, setApiBadges] = useState<Array<IRanking>>([]);
  const [loading, setLoading] = useState(false);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [invertedClass, setInvertedClass] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getBadges();
      setApiBadges(data);
      setLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setInvertedClass(true);
    }, 6000);
    setTimeout(() => {
      if (badgeIndex + 1 === BADGES.length) {
        setBadgeIndex(0);
        setInvertedClass(false);
      } else {
        setBadgeIndex(badgeIndex + 1);
        setInvertedClass(false);
      }
    }, 10000);
  }, [badgeIndex]);
  return (
    <div className='column space-between h-100'>
      <div className='column space-between h-100'>
        {quickLink}
        <Row className='welcome-text'>
          <Col md={16} sm={24}>
            <Row className='row align-center'>
              <Col sm={24} md={4}>
                <img
                  src={JamiaLogo}
                  alt='University Placement Cell, Logo'
                  className='jmi-logo-overlay'
                />
              </Col>
              <Col sm={24} md={20}>
                <br />
                <Title level={2}>Welcome to,</Title>
                <Title>
                  University Placement Cell
                  <br />
                  <p>Jamia Millia Islamia</p>
                </Title>
              </Col>
            </Row>
          </Col>
          <Col sm={24} md={8}>
            <img
              src={BADGES[badgeIndex].badge}
              alt='University Placement Cell, Logo'
              className={`${invertedClass ? 'rank-badge-inverted' : 'rank-badge'}`}
            />
          </Col>
        </Row>
      </div>
      <Row
        className='white'
        style={{display: selectScreen('none', 'none', null, null, null, null)}}>
        <Col md={24}>
          <TopRecruitersComp />
        </Col>
      </Row>
    </div>
  );
};

const HomeScreen: FC<IProps> = () => {
  return (
    <>
      <OverlayCarousel
        overlay={CarouselOverlayComponent}
        images={HOME_CAROUSEL}
        carousel={{dotPosition: 'bottom'}}
      />
      <Row
        className='white'
        style={{display: selectScreen(null, null, 'none', 'none', 'none', 'none')}}>
        <Col md={24}>
          <TopRecruitersComp />
        </Col>
      </Row>
      <Notice />
      <AboutUs />
      <PlacementProcess />
      {/* <TopRecruiters /> */}
      <ContactScreen />
    </>
  );
};

export default HomeScreen;
