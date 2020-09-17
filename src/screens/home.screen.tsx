import React, {FC, useEffect, useState} from 'react';
import {Tag, Typography, Row, Carousel} from 'antd';
import OverlayCarousel from 'components/overlayCarousel';
import AboutUs from 'components/home/aboutUs';
import {HOME_CAROUSEL} from 'constants/home/carousel.home.constant';
import TopRecruiters from 'components/home/topRecruiters';
import {selectScreen} from 'helpers/screen.helper';
import {
  COORDINATORS,
  PORTAL_HOME_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from 'constants/routes/main.paths.constant';
import {Link} from 'react-router-dom';
import Notice from 'components/home/notice';
import {getBadges} from 'helpers/api/core.api.helper';
import {CardRanking} from 'components/cardRanking';
import {IRanking} from 'types/common.type';
import ContactScreen from './contact.screen';

interface IProps {
}

const {Title} = Typography;
// const dummy = {
//   link:'https://facebook.com',
//   id:1,
//   issuer:'Outlook ranking',
//   rank:'1st',
//   year:2020,
//   heading:'all around the world among top 50 universities.',
//   show_on_site:true,
//   created:'kajhsdf',
//   modified:'aksdhjf',
// }

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
  const limit = selectScreen(1, 1, 2, 3);
  for (let i = 0; i < arr.length; i += limit) {
    newArr.push(arr.slice(i, i + limit));
  }
  return newArr;
};

const CarouselOverlayComponent = () => {
  const [apiBadges, setApiBadges] = useState<Array<IRanking>>([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getBadges();
      setApiBadges(data);
    };

    getData().then();
  }, []);

  return (
    <div className='column space-between' style={{height: '100%'}}>
      {quickLink}

      <div className='column'>
        <div className='welcome-text'>
          <Title level={2}>Welcome to,</Title>
          <Title>
            University Placement Cell
            <br />
            <p>Jamia Millia Islamia</p>
          </Title>
        </div>
      </div>

      <div className='ranking-container'>
        <Carousel autoplay dots={false}>
          {getBadgesArray(apiBadges).map((item, index) => (
            <div className='row-container'>
              <Row
                gutter={32}
                style={{
                  display: selectScreen('none', 'none', 'flex'),
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
                className='center-hv'>
                {
                  item.map((badge) => (
                    // <Col className='center-hv'>
                    <CardRanking {...badge} />
                    // </Col>
                  ))
                }
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
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
      <Notice />
      <AboutUs />
      <TopRecruiters />
      <ContactScreen />
    </>
  );
};

export default HomeScreen;
