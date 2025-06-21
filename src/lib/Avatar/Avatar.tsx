import React from 'react'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
}

const Avatar = ({ children, ...props }: AvatarProps) => {
    return (
        <div className={`${props.className}  rounded-full flex flex-row items-center gap-2`}
            {...props}
        >
            <img src={props.src} alt="avatar" className='max-w-10 max-h-10 rounded-full' />
            {children}
        </div>
    )
}

export default Avatar
