import React, {FC} from 'react';
import {Row, Col, Carousel, Typography} from 'antd';
import {TOP_RECRUITERS} from 'constants/home/topRecruiters.home.constant';
import {selectScreen} from '../../helpers/screen.helper';

interface IProps {
}

const getArrayGroup = (arr: Array<any>, groupSize = 3) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    newArr.push(arr.slice(i, i + groupSize));
  }
  return newArr;
};

const {Title} = Typography;
const TopRecruiters: FC<IProps> = () => (
  <>
    <div id='top-recruiter' className='top-recruiter top-recruiter-col container'>
      <div className='center'>
        <Title>
          Our Top Recruiter
        </Title>
      </div>
      <Carousel autoplay autoplaySpeed={1500} lazyLoad='progressive' dotPosition='left' pauseOnHover={false} pauseOnFocus={false}>
        {getArrayGroup(TOP_RECRUITERS, selectScreen(6, 6, 12, 16)).map((recruiterList, i1) => (
          <Row gutter={24} type='flex' justify='space-between' align='middle'>
            {recruiterList.map((recruiter, i2) => (
              <Col
                xs={24}
                md={12}
                lg={6}
                className='center margin-bottom-20 margin-top-20'
                key={i1.toString() + i2.toString()}>
                <div className='row justify-center'>
                  <img src={recruiter} alt='' className='image-top-recruiter'/>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Carousel>
    </div>
  </>
);

export default TopRecruiters;
