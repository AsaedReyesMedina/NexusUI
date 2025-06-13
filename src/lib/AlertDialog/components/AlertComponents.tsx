import { AlertDialogActionProps, AlertDialogCancelProps, AlertDialogHeaderProps, AlertDialogTriggerProps } from "../Alert.interface";
import { AlertDialogTitleProps } from "../Alert.interface";
import { AlertDialogDescriptionProps, AlertDialogFooterProps } from "../Alert.interface";
import { AlertDialogContentProps } from "../Alert.interface";

export const AlertDialogTrigger = ({ children, ...props }: AlertDialogTriggerProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
};
export const AlertDialogHeader = ({ children, ...props }: AlertDialogHeaderProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
}
export const AlertDialogTitle = ({ children, ...props }: AlertDialogTitleProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
}
export const AlertDialogDescription = ({ children, ...props }: AlertDialogDescriptionProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
}
export const AlertDialogContent = ({ children, ...props }: AlertDialogContentProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
};
export const AlertDialogCancel = ({
    children, ...props }: AlertDialogCancelProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
}
export const AlertDialogAction = ({ children, ...props }: AlertDialogActionProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
}
export const AlertDialogFooter = ({ children, ...props }: AlertDialogFooterProps) => {
    return <div className={`${props.className}`} {...props}>
        {children}
    </div>;
};