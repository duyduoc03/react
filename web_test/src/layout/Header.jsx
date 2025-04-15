function Header () {
    return (
        <header>
            <div className="container">
                <h1>My Website</h1>
                <nav>
                    <ul className="d-flex list-unstyled">
                        <li><a className="pr-4 py-2" href="/">Home</a></li>
                        <li><a className="px-4 py-2" href="#">About</a></li>
                        <li><a className="px-4 py-2" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header