import Logo from "./Logo";

export default function NavBar ({ children }) {

    return (
        <nav className="nav-bar">
            <Logo />
            {/* <Search setlists={setlists} /> */}
            { children }
        </nav>
    )
}