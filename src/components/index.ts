import { cssInterop } from 'nativewind';
import Svg from 'react-native-svg';

export * from './atoms';
export * from './molecules';
export * from './organisms';
export * from './templates';

cssInterop(Svg, {
  className: {
    target: 'style',
  },
});
