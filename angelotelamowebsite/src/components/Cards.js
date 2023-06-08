import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
                src = 'images/outreach.jpg'
                text = 'Community Outreach Coordinator'
                label = 'Part-time'
                path ='/jobs'
            />
            <CardItem
                src = 'images/mentor.jpg'
                text = 'Youth Mentor for Community'
                label = 'Part-time'
                path ='/jobs'
            />
            <CardItem
                src = 'images/adminAssist.jpg'
                text = 'Administrative Barangay Assistant'
                label = 'Part-time'
                path ='/jobs'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src = 'images/eventCoor.jpg'
                text = 'Community Center Program Coordinator '
                label = 'Part-time'
                path ='/jobs'
            />
            <CardItem
                src = 'images/ServiceAssist.jpg'
                text = 'Community Social Services Assistant'
                label = 'Part-time'
                path ='/jobs'
            />
             <CardItem
                src = 'images/volunteer.jpg'
                text = 'Volunteer Survey Coordinator'
                label = 'Part-time'
                path ='/jobs'
            />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
