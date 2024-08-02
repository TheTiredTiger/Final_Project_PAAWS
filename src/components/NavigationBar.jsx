// Navbar with logo(?) and labels for Home, Pets (or Search, something of the sort) on the left, user icon (or picture?) and cart on the right

// Should be able to collapse on smaller devices

function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i class="fa-solid fa-paw" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Our Pets</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Payment Plans</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <i className="fa-solid fa-user me-3" />
                    <i className="fa-solid fa-cart-shopping  me-2" />
                </span>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;