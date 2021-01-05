import React from 'react';
import { useRouter } from 'next/router';
import AuthScreen from '../screens/AuthScreen';

const Auth = () => <AuthScreen router={useRouter()} />;

export default Auth;
