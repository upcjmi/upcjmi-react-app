import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import {withRouter} from 'react-router-dom';

import {signOutAction} from '../../actions/auth.action';

interface IStateProps {}

interface IDispatchProps {
  signOut(redirect: any): any;
}

interface IProps extends IStateProps, IDispatchProps {
  history: {
    push: any;
  };
  redirect: boolean;
}

const DefaultSignOut: FC<IProps> = ({signOut, history, redirect = true}: IProps) => (
  <Button
    onClick={() => {
      const redirectFunction = redirect ? history.push : () => {};
      signOut(redirectFunction);
    }}
    icon="logout"
    type="link">
    Sign Out
  </Button>
);

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any): IStateProps => ({});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signOut: redirect => dispatch(signOutAction(redirect)),
});

// @ts-ignore
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DefaultSignOut),
);
