// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import { useRouter } from 'next/navigation';
import React from 'react';
import RegisterForm from '../../components/RegisterForm';

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {

  const router = useRouter()

  return (
    <RegisterForm onSuccess={() => router.push('/users')} onError={(errorMsg) => alert(errorMsg)} disabled={false}></RegisterForm>
  );
}

export default RegisterPage;