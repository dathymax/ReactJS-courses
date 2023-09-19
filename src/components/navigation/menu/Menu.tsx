import React, { FC, useEffect, useState } from 'react'
import { IMenuItem } from '../../../types/common'
import { BsBrowserSafari } from "react-icons/bs"
import "./style.css"
import { useNavigate } from 'react-router-dom'

interface MenuProps {
    defaultActive?: number
}

const Menu: FC<MenuProps> = ({ defaultActive }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState<number | undefined>(0);

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

    const onClick = (key?: string, index?: number) => {
        navigate(key || "/");
        setActive(index)
    }

    return (
        <ul>
            {MENU.map((menuItem, index) => {
                return (
                    <li
                        className={`${active === index && "bg-blue-100 menu__item-active text-blue-800 font-medium"} transition-all flex items-center gap-3 p-3 cursor-pointer select-none hover:bg-blue-100`}
                        onClick={() => onClick(menuItem?.key, index)}
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