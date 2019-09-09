import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import About from '../components/About';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Dropdown from '../components/Dropdown';
import Products from '../components/Products';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                    
                    <div className='pageBody'>
                    <Route path="/" exact component={Home} />
                    <Route path="/o-nama/" component={About} />
                    <Route path="/proizvodi/" component={Products} />
                    <Route path="/kontakt/" component={Contact} />
                    </div>
                    <nav className='navbar'>
                        <div className='navbarLogoContainer'><div>LOGO</div></div>
                        <div className='navbarLinks'>
                        <Link className='navbarLink' to='/'>Početna</Link>
                        <div className='navbarLinkDropdown'>
                        <Dropdown />
                        </div>
                        <Link className='navbarLink' to='/o-nama'>O nama</Link>
                        <Link className='navbarLink' to='/kontakt'>Kontakt</Link>
                        </div>

                    </nav>
                    <footer className='footer'></footer>
            </Router>
        )
    }
}