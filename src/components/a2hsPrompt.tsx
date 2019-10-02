import React, {Component} from 'react';
import {Button, Drawer, Typography} from 'antd';

interface IProps {}

interface IState {
  installPrompt: any;
  isA2HSVisible: boolean;
}

const {Title, Text} = Typography;

class A2hsPrompt extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      installPrompt: null,
      isA2HSVisible: false,
    };
  }

  componentDidMount = (): void => {
    window.addEventListener('beforeinstallprompt', this.handelPWAInstallPrompt);
  };

  componentWillUnmount = (): void => {
    window.addEventListener('beforeinstallprompt', this.handelPWAInstallPrompt);
  };

  handelPWAInstallPrompt = (e: any): void => {
    e.preventDefault();

    this.setState({
      installPrompt: e,
    });

    setTimeout(() => {
      this.setState({
        isA2HSVisible: true,
      });
    }, 1000 * 30);
  };

  toggle = (): void => {
    const {isA2HSVisible} = this.state;

    this.setState({
      isA2HSVisible: !isA2HSVisible,
    });
  };

  render() {
    const {isA2HSVisible, installPrompt} = this.state;

    return (
      <Drawer visible={isA2HSVisible} placement='bottom' closable={false}>
        <Title level={3}>Access all Job/Internships offline.</Title>
        <Text>Install our web app, it wont take any space in your phone.</Text>
        <br />
        <br />
        <div style={{textAlign: 'center'}}>
          <Button size='small' type='link' onClick={this.toggle}>
            Not Now
          </Button>
          <br />
          <Button
            style={{width: '100%'}}
            size='large'
            type='primary'
            onClick={() => {
              if (installPrompt)
                installPrompt.prompt().then(() => {
                  this.toggle();
                });
            }}>
            Install
          </Button>
        </div>
      </Drawer>
    );
  }
}

export default A2hsPrompt;
