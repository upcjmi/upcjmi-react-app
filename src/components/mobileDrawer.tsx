import React from 'react';
import { Drawer, Icon, Typography } from 'antd';
import {Link} from 'react-router-dom';

import {selectScreen} from '../helpers/screen.helper';
import HeaderPills from './headerPills';
import {HOME_PATH} from '../constants/paths.constant';

interface IProps {
}

interface IState {
  visible: boolean
}

const {Title} = Typography;

class MobileDrawer extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = { visible: false };
  }

  componentDidMount(): void {
    window.addEventListener('hashchange', this.onClose)
  }

  componentWillUnmount(): void {
    window.removeEventListener('hashchange', this.onClose)
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const toRender = selectScreen(true, true, false);
    const {visible} = this.state;

    if(!toRender)
      return null;

    return (
      <div>
        <div
          className='drawer-handel'
        >
          <Icon type='double-left' onClick={this.showDrawer} />
        </div>
        <Drawer
          // title='Basic Drawer'
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <div className='center-hv'>
            <Link to={HOME_PATH}>
              <Title>
                UPC JMI
              </Title>
            </Link>
          </div>

          <HeaderPills mode='vertical' />
        </Drawer>
      </div>
    );
  }
}


export default MobileDrawer;
