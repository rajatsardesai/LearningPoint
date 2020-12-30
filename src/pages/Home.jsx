import React from 'react';
import '../index.css';
import Common from '../commons/Common';
import web from '../img/Img2.png'

const Home = () => {
    return (
        <>
            <Common name='Grow your business with' imgsrc={web} visit="/services" btname="Get Started"/>
        </>
    );
}

export default Home;