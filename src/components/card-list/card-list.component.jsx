import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component.jsx'

// takes the parent information passesed down from App and creates a grid of cards
//does NOT decide how each individual card should look.
//passes each monster card data as prop to Card

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
)