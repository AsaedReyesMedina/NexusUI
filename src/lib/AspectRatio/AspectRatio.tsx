import React from 'react'
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}
const AspectRatio = ({ children, ratio, ...props }: AspectRatioProps) => {
    return (
        <div className={`${props.className}`} {...props} style={{ aspectRatio: ratio }}>
            {children}
        </div>
    )
}

export default AspectRatio
