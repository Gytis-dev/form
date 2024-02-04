export interface Action {
  label: string;
  disabled: boolean;
  primary?: boolean;
  onClick: () => void;
}
