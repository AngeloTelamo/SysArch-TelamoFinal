import React from 'react'
import '../../App.css'
import '../Cards.css'
import CardItem from '../CardItem'
import Footer from '../Footer'

function Jobs() {
  return (
    <div>
      <h1 className='jobs'>Jobs Available</h1>
         <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
                src = 'images/outreach.jpg'
                text = 'Community Outreach Coordinator'
                details = 'Coordinate outreach programs and initiatives, collaborate with community partners, and organize events to promote community engagement. 9 hours per week'                
                label = 'Part-Time P800.00 /hr'
                path ='/jobs'
            />
            <CardItem
                src = 'images/mentor.jpg'
                text = 'Youth Mentors'
                details = 'Provide guidance and support to young individuals, organize educational and recreational activities, and serve as a positive role model. 10 hours per week'
                label = 'Part-Time P400.00 /hr'
                path ='/jobs'
            />
            <CardItem
                src = 'images/adminAssist.jpg'
                text = 'Administrative Assistant'
                details = 'Assist with administrative tasks such as data entry, scheduling appointments, answering inquiries, and managing documentation. 15-20 hours per week'
                label = 'Part-Time P300.00 /hr'
                path ='/jobs'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src = 'images/eventCoor.jpg'
                text = 'Community Center Program Coordinator '
                details = 'Plan, implement, and evaluate community center programs and activities, ensuring they meet the needs and interests of the community.'
                label = 'Full-Time P1,800.00 /hr'
                path ='/jobs'
            />
            <CardItem
                src = 'images/ServiceAssist.jpg'
                text = 'Social Services Assistant'
                details = 'Support social workers in providing assistance to individuals and families in need, maintain client records, and coordinate resources.'
                label = 'Part-Time P450.00 /hr'
                path ='/jobs'
            />
             <CardItem
                src = 'images/volunteer.jpg'
                text = 'Volunteer Coordinator'
                details = 'Recruit, train, and coordinate volunteers for community events and programs, manage volunteer schedules and recognize their contributions..'
                label = 'Full-Time'
                path ='/jobs'
            />
            </ul>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}
export default Jobs
