import React from 'react'
import Avatar from '../../components/data-display/avatar/Avatar'
import Input from '../../components/data-entry/input/Input'
import { CiSearch } from "react-icons/ci"

const LayoutHeader = () => {
    return (
        <header className='px-3 flex items-center justify-between h-[60px]'>
            <Input prefix={<CiSearch />} />
            <Avatar />
        </header>
    )
}

export default LayoutHeader