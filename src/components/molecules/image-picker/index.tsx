import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { type FieldValues, useController } from 'react-hook-form';
import { View } from 'react-native';

import { Button, InputError, UserAvatar } from '@/components/atoms';
import type { InputControllerType } from '@/components/molecules';
import { translate } from '@/core';

export const ImagePickerInput = <T extends FieldValues>({
  control,
  name,
  rules,
}: InputControllerType<T>) => {
  const { field, fieldState } = useController({ control, name, rules });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled) {
      field.onChange(result.assets[0].uri);
    }
  };

  return (
    <>
      <View className="flex flex-row justify-center">
        <UserAvatar source={field.value} size="lg" />
      </View>
      {fieldState.error && (
        <InputError error={fieldState.error?.message} testID={'testID'} />
      )}
      <Button
        label={translate('add-post-form.pick-avatar')}
        onPress={pickImage}
        variant={fieldState.error ? 'destructive' : 'outline'}
        size="sm"
        className="mt-6"
      />
    </>
  );
};
