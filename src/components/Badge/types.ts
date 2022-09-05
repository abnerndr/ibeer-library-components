type BadgeSizes = 'small' | 'default'

export interface BadgeProps {
  children: string;
  size: BadgeSizes;
  full?: boolean;
};
