import React, {FC} from 'react';

import Typography from 'antd/es/typography';
import Icon from 'antd/es/icon';

import {CONTACT} from '../constants/contact';

interface IProps {}

const {Title} = Typography;

const ContactScreen: FC<IProps> = () => (
  <div id="contact" className="container">
    <Title>Contact Us</Title>

    <Title level={4} style={{fontWeight: 'normal'}}>
      {CONTACT.address.map(line => (
        <span key={line}>
          {line}
          <br />
        </span>
      ))}

      <br />
    </Title>

    <Title level={4}>
      <Icon type="phone" />
      &nbsp; 9097718815
    </Title>
  </div>
);

export default ContactScreen;
