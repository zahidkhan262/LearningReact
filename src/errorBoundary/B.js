import React from 'react'

const B = (props) => {
    if (true) {
        throw new Error('Error in B')
    }
    return (
        <>
            <h1>B Components</h1>
        </>
    )
}

export default B
