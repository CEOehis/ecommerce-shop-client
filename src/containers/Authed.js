import React from 'react';
import { connect } from 'react-redux';
import Auth from './pages/Auth';

const Authed = ({ render, isAuthenticated }) => {
  if (isAuthenticated) {
    return render;
  }
  return <Auth />;
};

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated } = auth;
  return {
    isAuthenticated,
  };
};

export default connect(mapStateToProps)(Authed);
