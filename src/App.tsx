/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter as Router} from 'react-router-dom';

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
    window.addEventListener('hashchange', this.scrollTop);
  };

  componentWillUnmount = (): void => {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('hashchange', this.scrollTop);
  };

  updateDimensions = (): void => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({width: window.innerWidth});
  };

  scrollTop = (): void => {
    window.scrollTo(0, 0);
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
