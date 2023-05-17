import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Book from "./Book";
import BookReviews from "./BookReviews";
import ProductPage from "./ProductDisplay";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/ProductDisplay" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}
