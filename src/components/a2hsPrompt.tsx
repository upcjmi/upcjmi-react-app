import React, {Component} from 'react';
import {Button, Drawer, Typography, message, Modal} from 'antd';
import {openNotificationWithIcon} from '../helpers/notification.helper';
import {selectScreen} from '../helpers/screen.helper';

interface IProps {}

interface IState {
  installPrompt: any;
  isA2HSVisible: boolean;
  installing: boolean;
}

const {Title, Text} = Typography;

class A2hsPrompt extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      installPrompt: null,
      isA2HSVisible: false,
      installing: false,
    };
  }

  componentDidMount = (): void => {
    window.addEventListener('beforeinstallprompt', this.beforeInstall);
    window.addEventListener('appinstalled', this.onInstall);
  };

  componentWillUnmount = (): void => {
    window.removeEventListener('beforeinstallprompt', this.beforeInstall);
    window.removeEventListener('appinstalled', this.onInstall);
  };

  beforeInstall = (e: any): void => {
    e.preventDefault();
    const deferredPrompt = e;

    this.setState({
      installPrompt: deferredPrompt,
    });

    setTimeout(() => {
      this.setState({
        isA2HSVisible: true,
      });
    }, 100);
  };

  handelNotNow = () => {
    this.setState({
      isA2HSVisible: false,
    });
    openNotificationWithIcon(
      'info',
      'We will miss you...',
      'In case you change your mind, go to Options > Add to Home Screen',
    );
  };

  handelPWAInstallPrompt = (): void => {
    const {installPrompt} = this.state;

    if (installPrompt) {
      installPrompt.prompt().then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          this.setState({
            installing: true,
          });
        } else {
          this.handelNotNow();
        }
      });
    }
  };

  onInstall = (): void => {
    message.success('Install successful');
    this.setState({
      installing: false,
      isA2HSVisible: false,
    });
  };

  toggle = (): void => {
    const {isA2HSVisible} = this.state;

    this.setState({
      isA2HSVisible: !isA2HSVisible,
    });
  };

  render() {
    const {isA2HSVisible, installing} = this.state;
    const AttentionSeeker = selectScreen(Drawer, Drawer, Modal);

    return (
      <AttentionSeeker
        visible={isA2HSVisible}
        placement='bottom'
        centered
        footer={null}
        closable={false}>
        <Title level={3}>Access all our job/internships offline</Title>
        <Text>Install our web app, it wont take any space on your device.</Text>
        <br />
        <br />
        <div className='center'>
          <Button size='small' type='link' onClick={this.handelNotNow}>
            Not Now
          </Button>
          <br />
          <Button
            loading={installing}
            className='full-width'
            size='large'
            type='primary'
            onClick={this.handelPWAInstallPrompt}>
            {installing ? 'Installing...' : 'Install'}
          </Button>
        </div>
      </AttentionSeeker>
    );
  }
}

export default A2hsPrompt;
