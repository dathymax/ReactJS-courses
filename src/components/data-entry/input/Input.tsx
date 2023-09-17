import React, { FC } from 'react'

interface InputProps {
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    width?: number | string
}

const Input: FC<InputProps> = ({ prefix, suffix, width = 300 }) => {
    return (
        <div className='flex items-center gap-2 p-2 rounded-[100px] bg-gray-200 text-[16px]' style={{ width: width }}>
            {prefix}
            <input type="text" className='w-[85%] outline-none bg-transparent' />
            {suffix}
        </div>
    )
}

export default Input