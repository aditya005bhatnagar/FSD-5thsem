import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import FetchProducts from './components/FetchProducts'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/fetchproducts" element={<FetchProducts />} />
                <Route path="/dashboard" element={<h2>Dashboard</h2>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App

