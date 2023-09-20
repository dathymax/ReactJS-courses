import React, { FC, useEffect, useState } from 'react'
import { IMenuItem } from '../../../types/common'
import { BsBrowserSafari } from "react-icons/bs"
import "./style.css"
import { useNavigate } from 'react-router-dom'

interface MenuProps {
    defaultActive?: string
}

const Menu: FC<MenuProps> = ({ defaultActive }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | undefined>("/browse-courses");

    useEffect(() => {
        setActive(defaultActive);
    }, [])

    const MENU: IMenuItem[] = [
        {
            key: "/browse-courses",
            label: "Browse Courses",
            icon: <BsBrowserSafari />
        },
        {
            key: "/browse-courses-2",
            label: "Browse Courses 2",
            icon: <BsBrowserSafari />
        },
    ]

    const onClick = (key?: string) => {
        navigate(key || "/");
        setActive(key)
    }

    return (
        <ul>
            {MENU.map((menuItem, index) => {
                return (
                    <li
                        className={`${active === menuItem.key && "bg-blue-100 menu__item-active text-blue-800 font-medium"} transition-all flex items-center gap-3 p-3 cursor-pointer select-none hover:bg-blue-100`}
                        onClick={() => onClick(menuItem?.key)}
                    >
                        {menuItem?.icon}
                        {menuItem?.label}
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu