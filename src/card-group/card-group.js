import React, { Component } from 'react';
import './card-group.css';

import Card from './card/card';


function CardGroup({mainColor, number}) {
    let cards = [];

    if (mainColor !== '') {
        if (number > 0 || number < 0) {
            cards.push(<Card key="0" color={mainColor} number={number}></Card>);
        } else {
            cards.push(<Card key="{0}" color={mainColor} number="-75"/>)
            cards.push(<Card key="{1}" color={mainColor} number="-25"/>)
            cards.push(<Card key="{2}" color={mainColor} number="0"/>)
            cards.push(<Card key="{3}" color={mainColor} number="25"/>)
            cards.push(<Card key="{4}" color={mainColor} number="75"/>)
        }
    }

    return (
        <div className="card-group">
            {cards}
        </div>
    );
}

export default CardGroup;
