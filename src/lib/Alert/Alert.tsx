import React from 'react'
import { AlertProps } from './Alert.interface'
const AlertTitle = ({ children, ...props }: AlertProps) => {
    return (
        <div className={`${props.className} flex flex-col gap-1 items-center`} {...props}>
            {children}
        </div>
    )
}
const Alert = ({ children, variant = "default", ...props }: AlertProps) => {
    return (
        <div className={`${props.className} flex flex-row gap-2 items-center p-4 rounded-md dark:bg-neutral-800 bg-neutral-100 dark:text-white text-black`} {...props}>
            {children}
        </div>
    )
}
Alert.Title = AlertTitle
export default Alert
