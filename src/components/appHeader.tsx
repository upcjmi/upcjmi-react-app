import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Menu, Icon} from 'antd';

import {
  CONTACT_PATH,
  HOME_PATH,
  SIGN_UP_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from '../constants/paths.constant';
import {selectScreen} from '../helpers/screen.helper';
import SignIn from './userAccountButton';

const JamiaLogo = require('../assets/svgs/jamia-logo.svg');

interface IProps {}

interface IState {
  prevScrollPos: number;
  visible: boolean;
}

const {Item} = Menu;

class AppHeader extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: true,
    };
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handelScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handelScroll);
  }

  handelScroll = () => {
    const {prevScrollPos} = this.state;

    const currentScrollPos = window.pageYOffset;
    const {body, documentElement: html} = document;

    const pageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    const visible =
      prevScrollPos > currentScrollPos ||
      currentScrollPos < 64 ||
      pageHeight - window.innerHeight - currentScrollPos < 64;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible,
    });
  };

  render() {
    const {visible} = this.state;

    return (
      <header className={`${!visible ? 'nav-up' : ''}`}>
        <Row style={{flex: 1}}>
          <Link to={HOME_PATH}>
            <Col
              xs={24}
              md={6}
              xxl={4}
              className="logo-container"
              style={{justifyContent: selectScreen('center', 'center', null)}}>
              <img src={JamiaLogo} alt="University Placement Cell, Logo" />
              &nbsp;&nbsp;&nbsp;
              <div style={{color: '#000000', fontSize: '0.9rem'}}>
                <b>University Placement Cell</b>
                <br />
                Jamia Millia Islamia
              </div>
            </Col>
          </Link>

          <Col xs={0} md={18} xxl={20}>
            <div className="header-pill center-hv" style={{height: '100%'}}>
              <SignIn />
            </div>

            <div className="header-pill">
              <Menu mode="horizontal" style={{border: 0}}>
                <Item key="contact">
                  <Link to={CONTACT_PATH}>
                    <Icon type="phone" />
                    Contact Us
                  </Link>
                </Item>

                <Item key="appstore">
                  <Link to={STUDENT_PORTAL_HOME_PATH}>
                    <Icon type="appstore" />
                    Placement Portal
                  </Link>
                </Item>

                <Item key="sign-up">
                  <Link to={SIGN_UP_PATH}>
                    <Icon type="user-add" />
                    Create New Account
                  </Link>
                </Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}

export default AppHeader;
