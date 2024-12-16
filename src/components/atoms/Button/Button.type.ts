export interface IButton {
  children: React.ReactNode;
  color?: "blue" | "red";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
