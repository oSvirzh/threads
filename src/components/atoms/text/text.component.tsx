import React, { useMemo } from 'react';
import type { TextStyle } from 'react-native';
import { I18nManager, StyleSheet, Text as NText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { translate } from '@/core/i18n';

import type { Props } from './text.types';

export const Text = ({
  className = '',
  style,
  tx,
  children,
  ...props
}: Props) => {
  const textStyle = useMemo(
    () =>
      twMerge(
        'text-base text-black  dark:text-white  font-inter font-normal',
        className
      ),
    [className]
  );

  const nStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        },
        style,
      ]) as TextStyle,
    [style]
  );

  return (
    <NText className={textStyle} style={nStyle} {...props}>
      {tx ? translate(tx) : children}
    </NText>
  );
};
