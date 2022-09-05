type HeaderAlignments = 'left' | 'center' | 'right';

export interface HeaderProps {
  title: string;
  onClick?: () => void;
  align?: HeaderAlignments;
};
