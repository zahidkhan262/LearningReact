import React from 'react'
import { useParams } from 'react-router';

const About = (props) => {

    // const id = props.match.params.id;
    // const name = props.match.params.name;
    // instead of above code we can use useParams........
    const { id, name } = useParams();
    // const eg = useParams();
    // console.log(eg)
    return (
        <>
            <div className="App">
                <h2>My name is zahid khan </h2>
                <p>I am frontend developer or UI/UX developer.</p>
                {id}{name}
            </div>
        </>
    )
}

export default About
