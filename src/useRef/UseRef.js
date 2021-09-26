import React, { useRef } from 'react';

export const UseRef = (props) => {
    const inputRef = useRef();

    function handleInput() {
        console.log(inputRef.current.value);
        inputRef.current.value = 'khan';
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }

    return (
        <div>
            <input ref={inputRef} type="text" name="firstname" placeholder="FirstNAme" />
            <button onClick={handleInput} >Click Me</button>
        </div>
    )
}
