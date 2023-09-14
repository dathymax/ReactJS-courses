import React from 'react'
import Menu from '../../components/navigation/menu/Menu'

const LayoutSidebar = () => {
    return (
        <aside
            style={{
                width: "200px",
                maxWidth: "200px",
                height: "100%"
            }}
            className='border-r border-gray-300'
        >
            <Menu />
        </aside>
    )
}

export default LayoutSidebar