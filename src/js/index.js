//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

import { Container } from "./component/container.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";
import { Card } from "./component/card.jsx";
import { Navbar } from "./component/navbar.jsx";


const App = () => {
    return(
    <div>
        <div className="wrapper">
            <Navbar/>
        </div>
        <Container>  
            <Jumbotron/>
            <div className="row p-2 d-flex">
                <div className="col px-1"><Card/></div>
                <div className="col px-1"><Card/></div>
                <div className="col px-1"><Card/></div>
                <div className="col px-1"><Card/></div>
            </div>
        </Container>
        <div className="wrapper">
            <p id="footer">Copyright © your website 2023</p>
        </div>
    </div>
    );
};

//render your react application
ReactDOM.render(<App/>, document.querySelector("#app"));

//ReactDOM.render(<Home />, document.querySelector("#app"));
