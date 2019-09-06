import React from 'react'

export default function DropdownItem(props: any) {
    return (
        <div className='navbarDropdownItem '>
            <img className='dropdownItemImg' src={props.imgLink} height={'120'} width={'300'} alt={props.title} ></img>
            <div>{props.title}</div>
        </div>
    )
}