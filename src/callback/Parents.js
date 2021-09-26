import React, { useCallback, useState } from 'react'
import { Child } from './Child';

export const Parents = () => {

    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(0);

    const getItems = useCallback(function getItems(num) {
        console.log(num)
        return [number + num, number - num]
    }, [number])
    return (
        <>
            Count: {count}
            <button onClick={() => { setCount(count + 1) }}>Click</button>
            chile VAlues: <br />
            <button onClick={() => { setNumber(number + 1) }}>Click</button>

            <Child getItems={getItems} />
        </>
    )
}
