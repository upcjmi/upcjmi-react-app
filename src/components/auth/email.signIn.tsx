import React, {FC} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SignInForm from '../../forms/signIn.form';
import {signInWithEmailAction} from '../../actions/auth.action';

interface IStateProps {}

interface IDispatchProps {
  signIn(email: string, password: string, redirect: any): any;
}

interface IProps extends IStateProps, IDispatchProps {
  history: {
    push: any;
  };
}

const EmailSignIn: FC<IProps> = (props: IProps) => {
  const form = (
    // @ts-ignore
    <SignInForm
      signIn={(email: string, password: string) => {
        props.signIn(email, password, props.history.push);
      }}
    />
  );
  return form;
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any): IStateProps => ({});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signIn: (email, password, redirect) => dispatch(signInWithEmailAction(email, password, redirect)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(withRouter(EmailSignIn));
