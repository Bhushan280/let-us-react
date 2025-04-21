import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img
                    className="log0"
                    src={ LOGO_URL }
                    alt=""
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;