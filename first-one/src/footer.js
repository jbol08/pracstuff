import React from 'react';

function Footer() {
    let date = new Date();
    let year = date.getFullYear()
    return <p>copyright ©{year}</p>
}

export default Footer;