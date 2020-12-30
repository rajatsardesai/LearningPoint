import React from 'react';
import '../index.css';
import Common from '../commons/Common';
import web from '../img/img3.png'

const About = () => {
    return (
        <>
            <Common name='Welcome to About Page' imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    );
}

export default About;