import React from 'react';
//import the alphabet tables here

export default function Alphabet(tile) {

    const demoPage = `./assets/${tile}`;

    return (
        <img className='' href={demoPage}></img>
    )

    //hell, this is gonna be weird to integrate. 
    //I don't know how to swap images, is there a switch...case for React?
    //maybe just use the one picture and do zooms/cuts/fancy shading?
};