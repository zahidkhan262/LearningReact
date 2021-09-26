import React from 'react'
import { useEffect } from 'react'
const BLazyCompo = () => {

    useEffect(() => {
        for (var i = 0; i < 100000; i++) {

        }
    }, [])
    return (
        <>
            B Lazy Component
        </>
    )
}

export default BLazyCompo;
