import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import Book from "./Book";
import BookReviews from "./BookReviews";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />}>

                </Route>
            </Routes>
        </Router>
    );
}
