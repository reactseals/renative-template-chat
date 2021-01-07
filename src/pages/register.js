import React from 'react';
import { useRouter } from 'next/router';
import RegisterScreen from '../screens/RegisterScreen';

const Register = () => <RegisterScreen router={useRouter()} />;

export default Register;
