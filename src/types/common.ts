import React from "react";

export interface IMenuItem {
    key?: string,
    label?: string | React.ReactNode,
    icon?: React.ReactNode,
    onClick?: () => void
}