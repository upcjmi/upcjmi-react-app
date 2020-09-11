import React, {FC, useEffect, useState} from 'react';
import {Skeleton, Tag, Typography, Card,Row,Col ,Carousel} from 'antd';
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
import { getBadges} from 'helpers/api/core.api.helper';
import {CardRanking} from 'components/cardRanking';
import {IRanking} from 'types/common.type';
import ContactScreen from './contact.screen';

interface IProps {}

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
    <Link to={`${STUDENT_PORTAL_HOME_PATH}jobs/`} className='linkType-1'>
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
const getBadgesArray= (arr:Array<any>) => {
  const newArr = [];
  for(let i = 0; i<arr.length;i+=4){
    newArr.push(arr.slice(i,i+4));
  }
  return newArr
}

const CarouselOverlayComponent = () => {
  const [apiBadges,setApiBadges] = useState<Array<IRanking>>([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    const getData  =  async ()=>{
      setLoading(true);
      const data = await getBadges();
      setApiBadges(data);
      setLoading(false);
    }
    getData()
  },[])
  return(
    <div className='column space-between' style={{height:'100%'}}>
      <div className='column'>
        {quickLink}
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
          {getBadgesArray(apiBadges).map((item,index) => (
            <div className='row-container'>
              <Row gutter={32} style={{display: selectScreen('none', 'none', null)}}>
                {
                item.map((badge)=>(
                  <Col span={6}>
                    <CardRanking {...badge} />
                  </Col>
                ))
              }
              </Row>
            </div>
          ))}
          {/* {[1,2].map((item,index) => ( */}
          {/*  <div className='row-container'> */}
          {/*    <Row */}
          {/*      gutter={32} */}
          {/*      style={{display: selectScreen('none', 'none', null)}} */}
          {/*      type='flex' */}
          {/*      justify='space-around' */}
          {/*    > */}
          {/*      { */}
          {/*          [1,2,3,4].map((badge)=>( */}
          {/*            <Col span={6}> */}
          {/*              <CardRanking */}
          {/*                {...dummy} */}
          {/*              /> */}
          {/*            </Col> */}
          {/*          )) */}
          {/*        } */}
          {/*    </Row> */}
          {/*  </div> */}
          {/* ))} */}
        </Carousel>
      </div>
      {loading?(
        <div className='badge-container' style={{display: selectScreen('none', 'none', null)}}>
          {
            [1, 2, 3, 4].map((i) => (
              <Card style={{ width: '16rem',margin:10 ,borderRadius:'2rem'}}>
                <Skeleton active={loading} key={i.toString()}  />
              </Card>
            ))
          }
        </div>
      ):null}
    </div>
  );
}

const HomeScreen: FC<IProps> = () =>
{
  return(
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
  );}

export default HomeScreen;
