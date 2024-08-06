import type { ImageSourcePropType } from 'react-native';

export interface UserAvatarProps {
  source?: ImageSourcePropType | null;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
}
