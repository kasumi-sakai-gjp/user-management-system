// components/RegisterForm.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm, { type RegisterFormInputs } from "./RegisterForm";

// メタデータ
const meta: Meta<typeof RegisterForm> = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
};

export default meta;
// ストーリーの定義
type Story = StoryObj<typeof RegisterForm>;

// デフォルトストーリーの設定
export const Default: Story = {
  args: {
    onSuccess: (formData: RegisterFormInputs) => {
      alert(`
        ユーザー登録成功
        name: ${formData.name}\n
        email: ${formData.email}\n
        role: ${formData.role}\n
      `)
    },
    onError: (errorMsg) => alert(errorMsg),
    disabled: false,
  },
};
