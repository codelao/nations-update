import React from 'react';

const Partners = () => {
    if(localStorage.getItem("logged")){
        return(
            <div>

            </div>
        )
    }
    return(
        <div>
            <br/>
            <br/>
            <h3>Our partners are so important and we accomplish a lot together.</h3>
            <h1>Partners</h1>
            <p>BECOMING A PARTNER</p>
            <p>If you would like to partner with us, fill out the form below and one of 
                our staff members will get back to you
            </p>
            <form>
                <input></input>
                <input></input>
                <br/>
                <input></input>
                <br/>
                <input></input>
                <br/>
                <input></input>
            </form>
        </div>
    )
}

export default Partners