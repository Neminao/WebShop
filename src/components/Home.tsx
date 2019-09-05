import React from 'react'
import AnimatedDiv from '../components/AnimatedDiv'

export default class Home extends React.Component {
    render(){
        return (
            <div className='homeBody'>
                <div className='homeBanner'> Banner </div>
                <div className='homeAnimatedDivsContainer'>
                    <AnimatedDiv />
                    <AnimatedDiv />
                    <AnimatedDiv />
                </div>
            </div>
        )
    }
}