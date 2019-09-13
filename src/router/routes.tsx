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
import Footer from '../components/Footer';

export default class Routes extends React.Component<{},{mobileMenu:boolean, loading: boolean, isLoaded: boolean}> {
    constructor(props: any){
        super(props);
        this.state ={
            mobileMenu: false,
            loading: true,
            isLoaded: false
        }
    }
    setLoading = (loading: boolean) => {
        this.setState({loading, isLoaded: true})
    }

    onClick = () =>{
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }

    render() {
        const {mobileMenu, loading, isLoaded} = this.state;
        return (
            <Router>
                <div className={loading? 'loading':'loaded'}> <h2>LOADING</h2></div>

                <div className='pageBody'>
                    <Route path="/" exact component={()=><Home loading={this.setLoading} isLoaded={isLoaded}/>} />
                    <Route path="/o-nama/" component={About} />
                    <Route path="/proizvodi/" component={Products} />
                    <Route path="/kontakt/" component={Contact} />
                </div>
                <nav className='navbar'>


                    <div className='navbarLogoContainer'>
                        <Link to='/'>
                        <span><img height={80} src='style/img/Logo.png' alt="LOGO"></img></span>
                        </Link>
                    </div>


                    <div className='navbarLinks'>
                        <Link className='navbarLink' to='/'>Početna</Link>
                        <div className='navbarLinkDropdown'>
                            <Dropdown />
                        </div>
                        <Link className='navbarLink' to='/o-nama'>O nama</Link>
                        <Link className='navbarLink' to='/kontakt'>Kontakt</Link>
                    </div>


                    <div className={'mobileMenuContainer '}>
                        <div onClick={this.onClick} className='mobileMenuOpen'>
                            <div className={mobileMenu ? 'burger1' : ''}></div>
                            <div className={mobileMenu ? 'burger2' : ''}></div>
                            <div className={mobileMenu ? 'burger3' : ''}></div>
                        </div>
                        <div className={'mobileMenuItemContainer '.concat(mobileMenu? 'showMobileContainer' : '')}>
                        <Link onClick={this.onClick} className='mobileLink' to='/'>Početna</Link>
                        <Link onClick={this.onClick} className='mobileLink' to='/proizvodi'>Proizvodi</Link>
                        <Link onClick={this.onClick} className='mobileLink' to='/o-nama'>O nama</Link>
                        <Link onClick={this.onClick} className='mobileLink' to='/kontakt'>Kontakt</Link>
                        </div>
                    </div>


                </nav>
                <Footer />
            </Router>
        )
    }
}