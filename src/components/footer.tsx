import React, {FC} from 'react';
import {Typography, Row, Col, Icon} from 'antd';
import packageJson from '../../package.json';

import XLink from './xLink';
import {
  BUG_REPORT,
  FEATURE_REQUEST,
  JAMIA_MILLIA_ISLAMIA,
  PRIVACY_POLICY,
  REPO_LINK, TERMS_AND_CONDITION,
  UNIVERSITY_PLACEMENT_CELL,
} from '../constants/externalLinks.constant';

interface IProps {
}

const {Title} = Typography;


// eslint-disable-next-line no-unused-vars
const Footer: FC<IProps> = (props: IProps) => (
  <footer>
    <Row>
      <Col xs={24} md={12}>
        <Title level={4}>
            External links
        </Title>
        <XLink href={UNIVERSITY_PLACEMENT_CELL}>
            Placement cell on Jamia&#39;s official site
        </XLink>
        <XLink href={JAMIA_MILLIA_ISLAMIA}>Jamia Millia Islamia</XLink>
        <XLink href={PRIVACY_POLICY}>Privacy policy</XLink>
        <XLink href={TERMS_AND_CONDITION}>Terms and Condition</XLink>
      </Col>
      <Col xs={24} md={12}>
        <Title level={4}>
          Application v
          {packageJson.version}
        </Title>
        This is an open source application.
        <XLink href={REPO_LINK}>
          <Icon type='github' />
          &nbsp; GitHub Repository
        </XLink>
        <XLink href={BUG_REPORT}>Report a Bug</XLink>
        <XLink href={FEATURE_REQUEST}>Request feature</XLink>
      </Col>
    </Row>
    <br />
    <br />
    <div className='center-hv'>
      <Title level={4}>
        &copy; 2019 University Placement Cell, Jamia Millia Islamia
      </Title>
    </div>
  </footer>
);


export default Footer;
