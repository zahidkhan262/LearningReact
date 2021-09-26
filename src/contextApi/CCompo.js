import React from 'react'
import { authContext, authContext2 } from '../App'
const CCompo = () => {
    return (
        <>
            <authContext.Consumer>
                {(authContext) => {
                    return (
                        // <h1>{authContext}</h1>
                        <authContext2.Consumer>
                            {(authContext2) => {
                                return (
                                    <>
                                        <h1>{authContext}</h1>
                                        <h2>{authContext2}</h2>
                                    </>
                                )
                            }}

                        </authContext2.Consumer>
                    )
                }}
            </authContext.Consumer>
            {/* <h1>CCompo</h1> */}
        </>
    )
}

export default CCompo
