// components/RegisterForm.tsx

import { createUser } from "@/utils/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// 必要に応じて利用する
export interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

// データ登録時ページ遷移情報
interface RegisterFormProps {
 onSuccess: (formData: RegisterFormInputs) => void;
 onError: (error: any) => void;
 disabled: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = (props: RegisterFormProps) => {

  // 登録ボタン連続押下防止
  const [registerBtnDistabled, setRegisterBtnDistabled] = useState<boolean>(false);

  useEffect(() => {
    setRegisterBtnDistabled(props.disabled);
  }, []);

  // 必要に応じて利用する
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  // 登録実行
  const execSubmit = async (formData: RegisterFormInputs) => {
    setRegisterBtnDistabled(true);
    try {
      // エラー時動確用コード
      // throw new Error("意図的なエラー発生")
      await createUser(formData);
      props.onSuccess(formData); 
    } catch (err) {
      props.onError(err);
      // ボタンを再押下可能に
      setRegisterBtnDistabled(false);
    } 
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, textAlign: 'center' }}>
      <Typography  variant="h5" gutterBottom>
        新規登録
      </Typography>

      <form onSubmit={handleSubmit(execSubmit)}>
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
          <Button variant="contained" disabled={registerBtnDistabled} type="submit">登録</Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
