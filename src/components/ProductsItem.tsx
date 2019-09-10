import React from 'react';

export default class ProductsItem extends React.Component<{imgLink: string; title: string, details: any},{toggle: boolean}> {
    constructor(props: any){
        super(props);
        this.state = {
            toggle: false
        }
    }
    onClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){
        const {title, imgLink, details} = this.props;
        const {toggle} = this.state
    return (
        <div className='productsItem'>
            <img height='401px' className='productsItemImg' src={imgLink} alt={title} ></img>
            <div className={'productsItemTitle '.concat(toggle ? '' : 'full')} >{title}</div>
            <div className={'productsItemContent '.concat(toggle ? 'shown' : 'hidden')}>
                {details}
            </div>
            <button onClick={this.onClick} className={'productsItemShowHideBtn '.concat(toggle ? 'hide' : 'show')}>
            
            </button>
        </div>
    )
    }
}