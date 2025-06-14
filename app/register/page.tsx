// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import { useRouter } from 'next/navigation';
import React from 'react';
import RegisterForm, { type RegisterFormInputs } from '../../components/RegisterForm';

const RegisterPage: React.FC = () => {

  const router = useRouter()

  return (
    <RegisterForm onSuccess={(formData: RegisterFormInputs) => router.push('/users')} onError={(errorMsg) => alert(errorMsg)} disabled={false}></RegisterForm>
  );
}

export default RegisterPage;