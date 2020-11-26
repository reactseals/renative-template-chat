import React from 'react';
import { useRouter } from 'next/router';
import AuthScreen from '../AuthScreen';

const Auth = () => <AuthScreen router={useRouter()} headerHeight={1000} />;

export default Auth;
