import { ReactNode } from 'react';

type AvatarVariants = 'circle' | 'square' | 'rounded';
type AvatarSizes = 'small' | 'default' | 'large';

export interface AvatarProps {
  variant: AvatarVariants;
  size: AvatarSizes;
  src?: string;
  alt?: string;
  title?: string;
  description?: string | ReactNode;
};
