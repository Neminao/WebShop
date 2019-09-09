import React from 'react'

export default class AnimatedDiv extends React.Component<{title:string; details:any; imgLink: string},{}> {
    
    render() {
        const {title, details, imgLink} = this.props;
        return (
            <div className='animatedDivWrapper'>
                <div className='animatedDivContainer'>
                    <div className='animatedDivContent animatedDivTopPart'>
                        <img height='96px' src={imgLink}></img>
                        <h2> {title}</h2>
                            
                    </div>
                    <div className='animatedDivContent animatedDivBottomPart'>
                            {details}
                    </div>
                </div>

            </div>
        )
    }
}