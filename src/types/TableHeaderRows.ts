export interface HeaderRows {
  key: string;
  content: React.ReactNode;
  info?: React.ReactNode;
  onClick?: (key: string) => void;
}
