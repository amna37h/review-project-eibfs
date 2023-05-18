import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Book from "./Book";
import BookReviews from "./BookReviews";
import BookDisplay from "./BookDisplay";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/BookDisplay" element={<BookDisplay />} />
            </Routes>
        </Router>
    );
}
