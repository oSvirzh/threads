import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Button, Text } from '@/components/atoms';
import { FormInput } from '@/components/molecules';
import type {
  FormType,
  LoginFormProps,
} from '@/components/organisms/login-form/login-form.types';
import { schema } from '@/components/organisms/login-form/login-form.types';

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <View className="flex-1 justify-center p-4">
      <Text testID="form-title" className="pb-6 text-center text-2xl">
        Sign In
      </Text>

      <FormInput testID="name" control={control} name="name" label="Name" />

      <FormInput
        testID="email-input"
        control={control}
        name="email"
        label="Email"
      />
      <FormInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        placeholder="******"
        secureTextEntry={true}
      />
      <Button
        testID="login-button"
        label="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
