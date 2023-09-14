import { Route, Routes } from "react-router-dom"
import Layout from "./layout"

function App() {
    return (
        <Routes>
            <Route index path="/" element={<Layout />} />
        </Routes>
    )
}

export default App
