import React from 'react'

export default class Carousel extends React.Component<{ images: any[] }, { position: number, doMove: boolean, direction: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            position: 0,
            doMove: false,
            direction: ''
        }
    }
    onClick = (event: any) => {
        const { id } = event.target;
        let position = this.state.position;
        const images = this.props.images;
        let doMove = this.state.doMove;
        if (!doMove) {
            this.setState({ doMove: true, direction: id });
            setTimeout(() => {
                if (id == 'left') {
                    if (position > 0)
                        position -= 1;
                    else position = images.length - 1;
                }
                else if (id == 'right') {
                    if (position < images.length - 1)
                        position += 1;
                    else position = 0;
                }
                this.setState({ position, doMove: false });
            }, 1000)
        }
    }

    render() {
        const images = this.props.images;
        const { position, doMove, direction } = this.state;
        const display = [];
        for (let i = 0; i < images.length; i++) {
            display.push(<img className='carouselImg' style={{ order: i - position > 0 ? i - position : images.length }} src={images[i]}></img>)
        }
        return (
            <div className='carouselWrapper'>
                <button className='carouselBtn' onClick={this.onClick} id='left'>  </button>
                <div className={'carouselImgContainer '.concat(doMove ? ( direction == 'right'? 'carouselMoveRight' : 'carouselMoveLeft' ) : '')}>
                    {display}
                </div>
                <button className='carouselBtn' onClick={this.onClick} id='right'>  </button>
            </div>
        )
    }
}