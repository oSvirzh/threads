import * as React from 'react';
import { useMemo } from 'react';

import { Image } from '@/components/atoms/image';
import { avatarTv } from '@/components/atoms/user-avatar/user-avatar.styles';
import type { UserAvatarProps } from '@/components/atoms/user-avatar/user-avatar.types';

export const UserAvatar = ({ source, image, size }: UserAvatarProps) => {
  const styles = useMemo(
    () =>
      avatarTv({
        size,
      }),
    [size]
  );

  return (
    <Image
      className={styles}
      contentFit="cover"
      source={
        source || {
          uri: image || 'https://avatar.iran.liara.run/public',
        }
      }
    />
  );
};
