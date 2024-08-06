import { useRouter } from 'expo-router';
import React from 'react';

import { FocusAwareStatusBar } from '@/components/organisms/focus-aware-status-bar';
import { LoginForm } from '@/components/organisms/login-form/login-form';
import type { LoginFormProps } from '@/components/organisms/login-form/login-form.types';
import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/');
  };

  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
