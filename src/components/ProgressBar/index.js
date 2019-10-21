import React from 'react'
import Filler from '../Filler'


const Progressbar = (props) => {
    return (
        <div>
            <Filler precentage={props.percentage} />
        </div>
    ) 
}

export default Progressbar