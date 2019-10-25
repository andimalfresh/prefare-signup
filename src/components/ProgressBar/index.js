import React from 'react'
import {ProgressBar} from 'react-bootstrap'


const Progressbar = (props) => {
    return (
        <div className='progressBar'>
            <ProgressBar variant='danger' now={30} />
        </div>
    ) 
}

export default Progressbar