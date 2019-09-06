import React from 'react';
import ContactForm from './ContactForm';

export default class Contact extends React.Component<{},{width:number; height:number}> {
    constructor(props: any) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <div className='contactBody'>
                <div className='contactHeader'>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width={this.state.width} height="160" id="gmap_canvas" src="https://maps.google.com/maps?q=SVETOG%20NIKOLE%2043&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}>
                            </iframe>
                            <a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/"></a>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='contactContainer'>
                    <div className='contactLeft'>
                        <ContactForm />
                    </div>
                    <div className='contactLeft'>
                        <table>
                            <tbody>
                                
                                <tr>
                                    <td>Adresa:</td><td>{" "} </td><td>Svetog Nikole 43, 11000
Beograd, Srbija</td>
                                </tr>
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
                </div>

            </div>
        )
    }
}