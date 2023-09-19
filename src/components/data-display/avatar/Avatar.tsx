import React, { FC } from 'react'

type AvatarProps = {
    src?: string,
    shape?: "circle" | "square",
    width?: string | number,
    children?: React.ReactNode
}

const Avatar: FC<AvatarProps> = ({ src, shape = "circle", width = 40, children }) => {
    return (
        <div
            className={`${shape === "circle" ? "rounded-full" : "rounded-lg"} ${src ? "" : "bg-gray-300"} cursor-pointer overflow-hidden flex items-center justify-center`}
            style={{ width: width, height: width }}
        >
            {src ? <img src={src} className='object-cover' style={{ width: width, height: width }} /> : children}
        </div>
    )
}

export default Avatar