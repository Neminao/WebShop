import React from 'react'

export default class AnimatedDiv extends React.Component<{title:string; details:any;},{}> {
    constructor(props: any){
        super(props);
    }
    render() {
        const {title, details} = this.props;
        return (
            <div className='animatedDivWrapper'>
                <div className='animatedDivContainer'>
                    <div className='animatedDivContent animatedDivTopPart'>
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