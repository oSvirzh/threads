import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { Button } from '@/components/atoms';
import { FormInput, ImagePickerInput } from '@/components/molecules';
import type {
  AddCommentFormProps,
  FormType,
} from '@/components/organisms/add-comment-form/add-comment-form.types';
import { schema } from '@/components/organisms/add-comment-form/add-comment-form.types';
import { FocusAwareStatusBar } from '@/components/organisms/focus-aware-status-bar';
import { translate } from '@/core';

export const AddCommentForm = ({ onSubmit, loading }: AddCommentFormProps) => {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1 p-4 ">
          <ImagePickerInput name="avatar" control={control} />
          <FormInput
            name="username"
            label={translate('add-post-form.username')}
            control={control}
            testID="user-name"
          />
          <FormInput
            name="email"
            label={translate('add-post-form.email')}
            control={control}
            testID="email"
          />
          <FormInput
            name="homePage"
            label={translate('add-post-form.home-page')}
            control={control}
            testID="home-page"
          />
          <FormInput
            name="text"
            label={translate('add-post-form.text')}
            control={control}
            multiline
            numberOfLines={10}
            testID="text"
          />
          <Button
            label={translate('add-post-form.submit')}
            loading={loading}
            onPress={handleSubmit(onSubmit)}
            testID="add-post-button"
          />
        </View>
      </ScrollView>
    </>
  );
};
