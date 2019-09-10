import React from 'react'
import AnimatedDiv from '../components/AnimatedDiv'
import Carousel from './Carousel';

export default class Home extends React.Component {
    render() {
        const images = [
            'style/img/vp.jpg',
            'style/img/kolonijal.jpg',
            'style/img/mleko.jpg',
            'style/img/meso.jpg',
            'style/img/hemija[33621].jpg',
            'style/img/smrznuto[34019].jpg'
        ]
        const details = [<h5>Tel: +381 11 3807 324</h5>,
        <h5>Mob: +381 64 11 65 562</h5>, <h5>E-mail: ikopak1@gmail.com</h5>,
        <h5 className='animatedDivLink'><a href='/kontakt'>Kontakt stranica</a></h5>]
        const details2 = [<h5>Konsalting u oblasti javnih nabavki</h5>,
        <h5>Usluge kompletne logistike i distribucije robe</h5>,
        <h5>Transport sirovina i isporuku gotovih proizvoda</h5>,
        <h5>Uslužno punjenje i pakovanje proizvoda</h5>,
        <h5 className='animatedDivLink'><a href='/o-nama'>Saznaj vise</a></h5>
        ]
        const detailsISO: any[] = [
            <h5 className='animatedDivLink'>
                <a href='https://ras.gov.rs/podrska-izvozu/standardi/iso-standardi'>
                    Saznaj vise
                </a>
            </h5>];
        const detailsHASSAP: any[] = [<h5>HACCP je sistem bezbednosti hrane koji se zasniva na analizi i kontroli potencijalnih bioloških/mikrobioloških,
             hemijskih i fizičkih opasnosti kojima su izložene sirovine,
              mogućih opasnosti pri rukovanju, proizvodnji, distribuciji i konzumiranju krajnjeg proizvoda.
              </h5>,
        <h5 className='animatedDivLink'><a href='https://ras.gov.rs/podrska-izvozu/standardi/haccp-1'>Saznaj vise</a></h5>];
        return (
            <div className='homeBody'>
                <div className='homeBanner'> <Carousel images={images} /> </div>
                <div className='homeAnimatedDivsContainer'>
                    <AnimatedDiv title='ISO Standard' details={detailsISO} imgLink='style/img/iso.png' />
                    <AnimatedDiv title='HACCP Standard' details={detailsHASSAP} imgLink='style/img/haccp2.png' />
                    <AnimatedDiv
                        title='Usluge' details={details2} imgLink='style/img/icons8-info-96.png' />
                    <AnimatedDiv title='Kontakt' details={details} imgLink='style/img/icons8-contacts-96.png' />
                </div>
            </div>
        )
    }
}