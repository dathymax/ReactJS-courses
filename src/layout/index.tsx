import React from 'react'
import LayoutSidebar from './sidebar'
import LayoutContent from './content'
import LayoutHeader from './header'

const Layout = () => {
    return (
        <main
            className='flex'
            style={{
                height: "100vh",
                maxHeight: "100vh",
                width: "100vw",
                maxWidth: "100vw"
            }}
        >
            <LayoutSidebar />
            <div>
                <LayoutHeader />
                <LayoutContent />
            </div>
        </main>
    )
}

export default Layout