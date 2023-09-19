import { Route, Routes } from "react-router-dom"
import Layout from "./layout"

function App() {
    return (
        <Routes>
            <Route index path="/" element={<Layout />} />
            <Route index path="/browse-courses" element={<Layout />} />
            <Route index path="/browse-courses-2" element={<Layout />} />
        </Routes>
    )
}

export default App
