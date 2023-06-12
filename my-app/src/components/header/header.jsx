import './header.css';
function Header() {
  return (
      <header className="header">
        <a href="#" className="logo">
            <img src="../../images/logo" alt="logo" />
        </a>
        <nav className="navbar">

            <a href="index.html" className="active">Home</a>
            <a href="products.html">Products</a>
            <a href="additions.html">Addition</a>
            <a href="about.html">About Us</a>
            <a href="rewiew.html">Rewiew</a>
            <a href="contact us.html">Contact Us</a>


        </nav>
        <div className="buttons">

            <button id="search-btn">
                <i className="fas fa-search">
                </i>

            </button>
            <button id="cart-btn">
                <i className="fas fa-shopping-cart">
                </i>
            </button>
            <button id="menu-btn">
                <i className="fas fa-bars"></i>
            </button>
        </div>

        <div className="search-form">
            <input type="text" className="search-input" id="search-box" placeholder="search here" />
            <i className="fas fa-search"></i>
        </div>
        <div className="cart-items-container">
            <div className="cart-item">
                <i className="fas fas-times"></i>
                <img src="images/lens-1.png" alt="lens" />
                <div className="content">
                    <h3>cart item 01</h3>
                    <div className="price">₺110</div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fas-times">

                </i>
                <img src="images/lens-2.png" alt="lens" />
                <div className="content">
                    <h3>cart item 02</h3>
                    <div className="price">₺110</div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fas-times">

                </i>
                <img src="images/lens-3.png" alt="lens" />
                <div className="content">
                    <h3>cart item 03</h3>
                    <div className="price">₺110</div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fas-times">

                </i>
                <img src="images/lens-5.png" alt="lens" />
                <div className="content">
                    <h3>cart item 04</h3>
                    <div className="price">₺120/full size</div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fas-times">

                </i>
                <img src="images/lens-6.png" alt="lens" />
                <div className="content">
                    <h3>cart item 05</h3>
                    <div className="price">₺120/full size</div>
                </div>
            </div>

            <a href="#" className="btn">checkout now</a>
        </div>
    </header>
  );
}

export default Header;
