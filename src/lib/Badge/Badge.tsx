import React from 'react'
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
const Badge = ({ children, ...props }: BadgeProps) => {
    return (
        <div className={`${props.className} inline-flex items-center justify-center w-fit p-1 rounded-full bg-gray-100`} {...props}>
            {children}
        </div>
    )
}

export default Badge
