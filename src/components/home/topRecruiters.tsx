import React, {FC} from 'react';
import { Row, Col, Carousel} from 'antd';
import {TOP_RECRUITERS} from 'constants/home/topRecruiters.home.constant';

interface IProps {}


const TopRecruiters: FC<IProps> = () => (
  <>
    <div className='top-recruiter top-recruiter-col'>
      <Carousel autoplay>
        {[1,2,3].map((item) => (
          <Row gutter={24} type='flex' justify='space-between' align='middle'>
            {TOP_RECRUITERS.map((recruiter, index) => (
              <Col
                xs={24}
                md={8}
                className='center margin-bottom-20 margin-top-20'
                key={index.toString()}>
                <div className='row justify-center'>
                  <img src={recruiter} alt='' className='image-top-recruiter' />
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
