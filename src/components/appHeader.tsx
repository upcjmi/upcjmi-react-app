import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button, Menu, Icon, notification} from 'antd';
import {GoogleLogin} from 'react-google-login';

import {CONTACT_PATH, HOME_PATH} from '../constants/paths.constant';
import {GOOGLE_OAUTH_CLIENT_ID} from '../constants/credentials.constant';
import {selectScreen} from '../helpers/screen';

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

  googleSignInSuccess = (response: any) => {
    notification.success({
      message: `Welcome ${response.profileObj.givenName}`,
      description: 'You successfully signed in.',
    });
  };

  googleSignInFailure = () => {
    notification.error({
      message: 'Sorry',
      description: 'Some unknown error occurred during signing in.',
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
            <div className="header-pill" style={{paddingTop: 18}}>
              <GoogleLogin
                clientId={GOOGLE_OAUTH_CLIENT_ID || ''}
                render={renderProps => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    type="primary"
                    icon="google">
                    Sign In With Google
                  </Button>
                )}
                buttonText="Login"
                onSuccess={this.googleSignInSuccess}
                onFailure={this.googleSignInFailure}
                cookiePolicy="single_host_origin"
              />
            </div>

            <div className="header-pill">
              <Menu mode="horizontal" style={{border: 0}}>
                <Item key="contact">
                  <Link to={CONTACT_PATH}>
                    <Icon type="phone" />
                    Contact Us
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
