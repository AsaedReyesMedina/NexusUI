import React from 'react'

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
const Breadcrumb = ({ children, ...props }: BreadcrumbProps) => {
    return (
        <div className={`${props.className} flex flex-row items-center gap-2`} {...props}>
            {children}
        </div>
    )
}

export default Breadcrumb
