import React, { useState, useEffect } from 'react'

export const Child = ({ getItems }) => {
    const [items, setItems] = useState();
    useEffect(() => {
        setItems(getItems(6))
    }, [getItems])


    console.log(items)
    return (
        <>

        </>
    )
}
