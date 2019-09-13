import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerNav'>
                <h4>Navigacija</h4>
                <Link className='footerLink' to='/'>Početna</Link>
                <Link className='footerLink' to='/proizvodi'>Proizvodi</Link>
                <Link className='footerLink' to='/o-nama'>O nama</Link>
                <Link className='footerLink' to='/kontakt'>Kontakt</Link>
                </div>
                <div className='footerContact'>
                <h4>Kontakt</h4>
                <table>
                            <tbody>

                                <tr>
                                    <td>Tel:</td><td> {" "}</td><td>+381 11 3807 324</td>
                                </tr>
                                <tr>
                                    <td>Mob:</td><td> {" "}</td><td>+381 64 11 65 562</td>
                                </tr>
                                <tr>
                                    <td>Fax:</td><td> {" "}</td><td>+381 11 2415 359</td>
                                </tr>
                                <tr>
                                    <td>E-mail:</td><td>{" "} </td><td>ikopak1@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                <div className='socialLinks'>

                </div>
            </div>
        )
    }
}