
import React, { createContext } from 'react'
import { BioData } from './ComA';

const ComC = () => {
    const daysAbout = createContext(BioData);
    return (
        <>
        <h3>Today About {daysAbout}</h3>
        </>
    )
}

export default ComC