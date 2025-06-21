import React from 'react'
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './components/AlertComponents';
import { AlertDialogProps } from './Alert.interface';

const AlertDialog = ({ children, ...props }: AlertDialogProps) => {
    return (
        <div className={`${props.className}`} {...props}>
            {children}
        </div>
    )
}
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Header = AlertDialogHeader;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

export default AlertDialog
