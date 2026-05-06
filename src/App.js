import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home"
import Team from "./Pages/Team/team";
import Matches from "./Pages/Matches/matches";
import News from "./Pages/News/news";
import Details from "./Pages/Details/newsDetails"
import Trophies from "./Pages/Trophies/trophies";
import Gallery from "./Pages/Gallery/gallery";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import "bootstrap-icons/font/bootstrap-icons.css"
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/team" element={<Team />}></Route>
                    <Route path="/matches" element={<Matches />}></Route>
                    <Route path="/news" element={<News />}></Route>
                    <Route path="/news/:id" element={<Details />}></Route>
                    <Route path="/trophies" element={<Trophies />}></Route>
                    <Route path="/gallery" element={<Gallery />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App; 