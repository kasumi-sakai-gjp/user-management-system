// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';
import RegisterForm from '../../components/RegisterForm';

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  return (
    <RegisterForm></RegisterForm>
  );
}

export default RegisterPage;