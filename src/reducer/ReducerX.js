import React, { useState, useReducer } from 'react';


const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION.DECREMENT:
            return { count: state.count - 1 };
        case ACTION.INCREMENT:
            return { count: state.count + 1 }
        default:
            return state;
    }
}

export const ReducerX = () => {

    // const [count, setCount] = useState(0);

    // useReducer use instead of useState

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const decrement = () => {
        // setCount(count - 1)
        dispatch({ type: ACTION.DECREMENT })
    }
    const increment = () => {
        // setCount(count + 1) 
        dispatch({ type: ACTION.INCREMENT })
    }


    return (
        <>
            <button onClick={decrement}>minus</button><bt />
            {state.count}
            <button onClick={increment}>Plus</button><bt />

        </>
    )
}
