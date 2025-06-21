export interface AlertDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
export interface AlertDialogTriggerProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogContentProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogHeaderProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogTitleProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogDescriptionProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogCancelProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogActionProps extends AlertDialogProps {
  children: React.ReactNode;
}
export interface AlertDialogFooterProps extends AlertDialogProps {
  children: React.ReactNode;
}
