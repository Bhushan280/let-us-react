import React from "react";
import ReactDOM from "react-dom/client"; 
/**
 * Rough Idea how to build an web applicaiton
 * Header 
 * - logo 
 * - nav items
 * 
 * Body
 * -Search
 * - Restaureant list
 *  - ResaurantCard
 *    -> img, name of res, start rating, couisins , delivery time etc.
 * Footer
 *  - Copuright
 *  - Links
 *  - Address
 *  - Contsnt 
*/
//React Element
const Header = () => {
    return (
        <div className="header">
            <div>
                <img
                    className="logioi"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
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
const RestaurentCard = () => {
    return (
        <div className="res-card">
            <h3>Meghana Food</h3>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard/>
            </div>
        </div>
    )
};

//Root Level Cmoponent
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body/>

    </div>;
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);


