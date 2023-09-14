import React, { FC, useEffect, useState } from 'react'
import { IMenuItem } from '../../../types/common'
import MenuItem from './item/MenuItem'
import { BsBrowserSafari } from "react-icons/bs"
import "./style.css"

interface MenuProps {
    defaultActive?: string
}

const Menu: FC<MenuProps> = ({ defaultActive }) => {
    const [active, setActive] = useState<string | undefined>("");

    useEffect(() => {
        setActive(defaultActive);
    }, [])

    const MENU: IMenuItem[] = [
        {
            key: "1",
            label: "Browse Courses",
            icon: <BsBrowserSafari />
        },
    ]

    return (
        <ul>
            {MENU.map((menuItem) => {
                return (
                    <MenuItem
                        active={active}
                        icon={menuItem.icon}
                        label={menuItem.label}
                        onClick={() => setActive(menuItem.key)}
                    />
                )
            })}
        </ul>
    )
}

export default Menu