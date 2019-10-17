import React from 'react'
import Filler from './components/Filler'


const Progressbar = (props) => {
    return (
        <div>
            <Filler precentage={props.percentage} />
        </div>
    ) 
}

export default Progressbar