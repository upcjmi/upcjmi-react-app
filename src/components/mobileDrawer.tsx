import React from 'react';
import {Drawer, Icon, Typography} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import {selectScreen} from 'helpers/screen.helper';
import {HOME_PATH} from 'constants/routes/main.paths.constant';
import HeaderPills from './headerPills';

interface IProps {
  history: any;
}

interface IState {
  visible: boolean;
}

const {Title} = Typography;

class MobileDrawer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {visible: false};
  }

  componentDidMount(): void {
    const {history} = this.props;
    window.addEventListener('hashchange', this.onClose);
    history.listen(() => {
      this.onClose();
    });
  }

  componentWillUnmount(): void {
    window.removeEventListener('hashchange', this.onClose);
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

    if (!toRender) return null;

    return (
      <div>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className='drawer-handel' onClick={this.showDrawer}>
          <Icon type='down-circle' />
        </div>
        <Drawer placement='top' closable={false} onClose={this.onClose} visible={visible}>
          <div className='center-hv'>
            <Link to={HOME_PATH}>
              <Title level={4}>University Placement Cell</Title>
            </Link>
          </div>

          <HeaderPills mode='vertical' />
        </Drawer>
      </div>
    );
  }
}

// @ts-ignore
export default withRouter(MobileDrawer);
