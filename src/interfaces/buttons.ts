export type ModalMessage = {
  header?: JSX.Element | string;
  title?: string;
  content?: JSX.Element | string;
  selfClose?: boolean;
  isVisible?: boolean;
  onBackdropPress?: (() => void) | undefined;
  actions?: ModalActions;
};

export type ButtonAction = {
  component?: JSX.Element;
  content?: JSX.Element | string;
  onPress?: (<T>(a: T) => T) | (() => void);
};

export type ModalActions = {
  primary?: ButtonAction;
  secondary?: ButtonAction;
};

export type IconProps = {
  name: string;
  size: number;
  color: string;
};

export type ImageProps = IconProps & { isSvg: boolean };
