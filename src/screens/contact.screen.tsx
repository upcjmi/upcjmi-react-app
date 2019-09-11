import React, {FC} from 'react';
import {Typography, Icon, Row, Col} from 'antd';

import {CONTACT} from '../constants/contact.constant';
import ContactAssistanceForm from '../forms/contactAssistance.form';

interface IProps {}

const {Title} = Typography;

const ContactScreen: FC<IProps> = () => (
  <div id="contact">
    <Row>
      <Col xs={24} md={12} className="container">
        <Title>Contact Us</Title>
        <Title level={4} style={{fontWeight: 'normal'}}>
          {CONTACT.address.map(line => (
            <div key={line}>
              {line}
              <br />
            </div>
          ))}
        </Title>
        Phone numbers
        <ul className="space-child">
          {CONTACT.phoneNumbers.map((phone, index) => (
            <li key={index.toString()}>
              <a href={`tel:${phone}`} key={phone}>
                <Icon type="phone" />
                &nbsp;
                {phone}
              </a>
            </li>
          ))}
        </ul>
        Mailing addresses
        <ul>
          {CONTACT.mails.map((mail, index) => (
            <li key={index.toString()}>
              <a href={`mailto:${mail}`} key={mail}>
                <Icon type="mail" />
                &nbsp;
                {mail}
              </a>
            </li>
          ))}
        </ul>
      </Col>

      <Col xs={24} md={12} className="container">
        <Title level={3}>Need assistance from us?</Title>
        <ContactAssistanceForm />
      </Col>
    </Row>
    <iframe
      title="Way to University Placement Cell, Jamia Millia Islamia"
      width="100%"
      height="320px"
      style={{marginLeft: 'auto', marginRight: 'auto'}}
      id="gmap_canvas"
      src={
        'https://maps.google.com/maps?' +
        'q=university%20placement%20cell&t=&z=13&ie=UTF8&iwloc=&output=embed'
      }
      frameBorder="0"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
    />
  </div>
);

export default ContactScreen;
