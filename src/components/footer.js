import React, { Component } from 'react';



const CartFooter = ({CopyrightYear}) => {
    return(
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">&copy; {CopyrightYear}</a>
    </nav>
    )
}


export default CartFooter;