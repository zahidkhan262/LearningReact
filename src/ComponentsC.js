import React, { useContext } from 'react';
import { Firstname } from './App';
import { Lastname } from './App';

export const ComponentsC = (props) => {

    const FirstName = useContext(Firstname);
    const LastName = useContext(Lastname);

    return (
        <div>
            <h1>I am {FirstName}{LastName}</h1>
        </div>
    )
}
