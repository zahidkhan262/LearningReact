import React from 'react'
import { useHistory, useLocation } from 'react-router'

const Contact = (props) => {

    const history = useHistory();
    const goBack = () => {
        // history.goBack();
        history.push('/about');
        // by useHistory hook we can back to home or where you want to go  by click an event t go(), goBack(), push()
    }

    const location = useLocation();

    // by useLocation we can get path of  our URL
    console.log(location)
    return (
        <>
            <div className="App">
                <h2>{location.pathname != '/contact' ? 'Contact' : 'No contact here..'} {props.name}</h2>
                <a href="tel:8874262123">+91 8874262123</a>
                <a href="mailto:zahidkhan007860@gmail.com">zahidkhan007860@gmail.com</a>
                <button onClick={goBack}>Back to home</button>
            </div>
        </>
    )
}

export default Contact
