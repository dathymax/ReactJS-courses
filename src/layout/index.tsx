import React from 'react'
import LayoutSidebar from './sidebar'
import LayoutContent from './content'

const Layout = () => {
    return (
        <main
            className='flex items-center justify-center'
            style={{
                height: "100vh",
                maxHeight: "100vh",
                width: "100vw",
                maxWidth: "100vw"
            }}
        >
            <LayoutSidebar />
            <LayoutContent />
        </main>
    )
}

export default Layout