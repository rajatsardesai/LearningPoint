import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';

const App = () => {
    return (
        <>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
                <Home />
            </Switch>
            <Footer/>
        </>
    );
}

export default App;