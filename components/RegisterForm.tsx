// components/RegisterForm.tsx

import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

// 必要に応じて利用する
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

// データ登録時ページ遷移情報
interface RegisterFormProps {
 onSuccess?: () => void;
 onError?: (error: any) => void;
 disabled?: boolean;
}


// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC = (props: RegisterFormProps) => {
  // 必要に応じて利用する
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  // 登録実行
  // const onSubmit = () => {
  //   createUser()
  // }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography  variant="h5" gutterBottom>
        新規登録
      </Typography>

      {/* TODO: createUserを呼び出す為の関数を呼び出す必要がある */}
      <form onSubmit={handleSubmit(props.onSuccess!, props.onError)}>
        <TextField label="User Name" sx={{m: 2}} {
          ...register('name', {required: '名前を入力してください'})
        }></TextField>
        {errors.name && (
          <Typography color='error'>{errors.name.message}</Typography>
        )}
        <TextField label="Email Adress" type="email" sx={{m: 2}} {
          ...register('email', {required: 'メールアドレスを入力してください'})
        }></TextField>
        {errors.email && (
          <Typography color='error'>{errors.email.message}</Typography>
        )}
        <TextField label="User Role" sx={{m: 2}} {
          ...register('role', {required: '権限を入力してください'})
        }></TextField>
        {errors.role && (
          <Typography color='error'>{errors.role.message}</Typography>
        )}
        <Box sx={{m: 3}}>
          <Button variant="contained" disabled={props.disabled} type="submit">登録</Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
