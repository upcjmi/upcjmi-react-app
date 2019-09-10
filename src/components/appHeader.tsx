import React, {Component} from 'react';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Button from 'antd/es/button';
import Menu from 'antd/es/menu';
import Icon from 'antd/es/icon';

import '../styles/header.scss';
import {CONTACT_PATH, HOME_PATH} from '../constants/paths';

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
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 64;

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
            <Col xs={24} md={6} xxl={4} className="logo-container space-child">
              <img src={JamiaLogo} alt="University Placement Cell, Logo" />
              &nbsp;&nbsp;&nbsp;
              <div style={{color: '#000000'}}>
                <b>University Placement Cell</b>
                <br />
                Jamia Millia Islamia
              </div>
            </Col>
          </Link>

          <Col xs={0} md={18} xxl={20}>
            <div className="header-pill" style={{paddingTop: 18}}>
              <Button type="primary" icon="google">
                Sign In With Google
              </Button>
            </div>

            <div className="header-pill">
              <Menu mode="horizontal" style={{border: 0}}>
                <Item key="contact">
                  <Link to={CONTACT_PATH}>
                    <Icon type="phone" />
                    Contact Us
                  </Link>
                </Item>
                <Item key="recruit">
                  <Icon type="solution" />
                  Recruit
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
