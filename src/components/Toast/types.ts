export interface ToastPropsComponent {
  title?: string
  subtitle?: string,
  onClose: () => void,
  icon: IconType,
  visible?: boolean,
  type: ToastType
};

export type ToastType = 'success' | 'crema' | 'warning' | 'coral'
export type IconType = JSX.Element | string | null
