/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

import rootReducer from 'reducers';
import Main from 'main';

export const store = createStore(rootReducer, applyMiddleware(thunk));

interface IProps {}

interface IState {
  width: number;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      width: window.innerWidth,
    };
  }

  componentDidMount = (): void => {
    window.addEventListener('resize', this.updateDimensions);
  };

  componentWillUnmount = (): void => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  updateDimensions = (): void => {
    const {width: oldWidth} = this.state;

    if (oldWidth !== window.innerWidth) this.setState({width: window.innerWidth});
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;
