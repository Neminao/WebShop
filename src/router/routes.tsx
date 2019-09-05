import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    RouteComponentProps
} from "react-router-dom";
import About from '../components/About';
import Home from '../components/Home';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div >
                    <nav className='navbar'>
                        <div className='navbarLogoContainer'>LOGO</div>
                        <div className='navbarLinks'>
                        <Link className='navbarLink' to='/'>Početna</Link>
                        <div className='navbarLinkDropdown'>
                        <Link className='navbarLink' to='/proizvodi'>Proizvodi</Link>
                        <div className='navbarDropdownContainer'>
                            <div>Mlecni</div>
                            <div>Mesni</div>
                            <div>Zitarice</div>
                            <div>Pice</div>
                        </div>
                        </div>
                        <Link className='navbarLink' to='/o-nama'>O nama</Link>
                        <Link className='navbarLink' to='/kontakt'>Kontakt</Link>
                        </div>

                    </nav>
                    <div className='pageBody'>
                    <Route path="/" exact component={Home} />
                    <Route path="/o-nama/" component={About} />
                    <Route path="/proizvodi/" component={Users} />
                    <Route path="/kontakt/" component={Users} />
                    </div>
                </div>
            </Router>
        )
    }
}




function Users() {
    return <h2>Users</h2>;
}