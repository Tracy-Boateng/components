function Header (props) {
    return (
        <header>
            <h1>HomeBnB</h1>

            <nav>
                <ul>
                    {props.navLinks.map((link, index) => (
                        <li key={index}>
                            {link}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    );
}

export default Header;