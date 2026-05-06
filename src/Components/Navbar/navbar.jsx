import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../Navbar/navbar.css"
function Navbar() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/team?search=${searchTerm.trim()}`);
            setSearchTerm("");
        }
    };
    /* Nav-Scroll */
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener(
            "scroll", handleScroll
        )
        return () => {
            window.removeEventListener(
                "scroll", handleScroll
            )
        }
    }, [])

    /* Close-Open */
    const [open, setOpen] = useState(false)
    const toggleNavbar = () => setOpen(!open)
    const closeNavbar = () => setOpen(false)

    /* ToTeam */
    const navigation = useNavigate()

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg p-0 m-0">
                    <div className={`container nav-style ${scrolled ? "scrolled" : ""}`}>
                        <NavLink className="navbar-brand" to="/"> <img src="/Images/bayernLogo.png" alt="bayern-logo" className="nav-logo" /> </NavLink>
                        <button className="btn-nav" type="submit" onClick={() => navigation("/team")}> Starting XI </button>
                        <button onClick={toggleNavbar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse nav-content ${open ? "show" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/team"> Team </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/matches" aria-disabled="true"> Matches </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/news" aria-disabled="true"> News </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/trophies" aria-disabled="true"> Trophies </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/gallery" aria-disabled="true"> Gallery </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeNavbar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact" aria-disabled="true"> Contact </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex form-search" role="search" onSubmit={handleSearch}>
                                <input className="form-control me-2" type="search" placeholder="Search Players ..." aria-label="Search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
                                <button className="btn btn-primary" type="submit"> <i className="bi bi-search"></i> </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar