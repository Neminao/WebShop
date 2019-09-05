import React from 'react'

export default class AnimatedDiv extends React.Component {
    render() {
        return (
            <div className=''>
                <div className='animatedDivContainer animatedDivTopPart'><div className='animatedDivContent'></div></div>
                <div className='animatedDivContainer animatedDivBottomPart'><div className='animatedDivContent'></div></div>
            </div>
        )
    }
}