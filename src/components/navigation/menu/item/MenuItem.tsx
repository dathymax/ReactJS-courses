import React, { FC } from 'react'
import { IMenuItem } from '../../../../types/common'

interface MenuItemProps extends IMenuItem {
    active?: string
}

const MenuItem: FC<MenuItemProps> = ({ icon, key, label, active }) => {
    return (
        <li
            className={`menu__item ${active === key && "bg-blue-100 text-blue-800 font-medium"} transition-all flex items-center gap-3 p-3 cursor-pointer select-none hover:bg-blue-100`}
        >
            {icon}
            {label}
        </li>
    )
}

export default MenuItem