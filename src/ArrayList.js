import React from 'react'

const ArrayList = (props) => {
    return (
        <ul>
            <li onClick={props.clickitem}> Name: {props.children}</li>
            
        </ul>
    )
}

export default ArrayList
