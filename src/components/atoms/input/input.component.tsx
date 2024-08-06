import * as React from 'react';
import { forwardRef, useCallback, useMemo, useState } from 'react';
import type { TextInput } from 'react-native';
import { I18nManager, StyleSheet, TextInput as NTextInput } from 'react-native';

import { colors } from '@/ui';

import { inputTv } from './input.styles';
import type { InputProps } from './input.types';

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { error, testID, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = useState(false);
  const onBlur = useCallback(() => setIsFocussed(false), []);
  const onFocus = useCallback(() => setIsFocussed(true), []);

  const styles = useMemo(
    () =>
      inputTv({
        error: error,
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  return (
    <NTextInput
      testID={testID}
      ref={ref}
      placeholderTextColor={colors.neutral[400]}
      className={styles}
      onBlur={onBlur}
      onFocus={onFocus}
      {...inputProps}
      style={StyleSheet.flatten([
        { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
        { textAlign: I18nManager.isRTL ? 'right' : 'left' },
        inputProps.style,
      ])}
    />
  );
});
