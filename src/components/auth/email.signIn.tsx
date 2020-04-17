import React, {FC} from 'react';
import {connect} from 'react-redux';

import SignInForm from 'forms/signIn.form';
import {signInWithEmailAction} from 'actions/auth.action';

interface IStateProps {}

interface IDispatchProps {
  signIn(email: string, password: string): any;
}

interface IProps extends IStateProps, IDispatchProps {}

const EmailSignIn: FC<IProps> = (props: IProps) => {
  return (
    // @ts-ignore
    <SignInForm
      signIn={(email: string, password: string) => {
        props.signIn(email, password);
      }}
    />
  );
};

// +918191921292

const mapStateToProps = (): IStateProps => ({});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  signIn: (email, password) => dispatch(signInWithEmailAction(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(EmailSignIn);
