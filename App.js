import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

export default function App() {
    const map = data.map(card => {
        return (
            <Card 
                key={card.id}
                item={card}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <div className='app--list'>
                {map}
            </div>
        </div> 
    )
}
