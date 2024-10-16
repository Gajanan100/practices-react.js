


import React, { createContext, BioData } from 'react'
import { ComB } from './ComB';

const ComAA = () => {

    const BioData = createContext()
    return (
        <BioData.Provider value={"Today is HoliDays"}>
            <ComB />
        </BioData.Provider>

    )
}
export default ComAA
export { BioData };

