import React from 'react'
import AnimatedDiv from '../components/AnimatedDiv'

export default class Home extends React.Component {
    render(){
        const details = [<h5>Tel: +381 11 3807 324</h5>,<h5>Mob: +381 64 11 65 562</h5>,<h5>E-mail: ikopak1@gmail.com</h5>]
        const details2 = [<div>Konsalting u oblasti javnih nabavki</div>,
        <div>Usluge kompletne logistike i distribucije robe</div>,
        <div>Transport sirovina i isporuku gotovih proizvoda</div>,
        <div>Uslužno punjenje i pakovanje proizvoda</div>
    ]
        return (
            <div className='homeBody'>
                <div className='homeBanner'> Banner </div>
                <div className='homeAnimatedDivsContainer'>
                    <AnimatedDiv title='Usluge' details={details2}/>
                    <AnimatedDiv title='Kontakt' details={details}/>
                </div>
            </div>
        )
    }
}