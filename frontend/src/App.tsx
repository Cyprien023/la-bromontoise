import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Wellness from './pages/Wellness'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Footer from "./components/Footer.tsx";


export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chambres" element={<Rooms />} />
                <Route path="/bien-etre" element={<Wellness />} />
                <Route path="/tarifs" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}
