import React, { useState } from 'react';
import './Cards.css';
import artThearapy from '../content/art_thearapy.jpg';
import Behaviour_thearapy from '../content/Behaviour_thearapy.jpg';
import Home_healthaide from '../content/Home_health-aide.jpg';
import music_thearapy from '../content/music_thearapy.jpg';
import Nurshing_services from '../content/Nurshing_services.jpg'




function Cards() {
    const [card] = useState([{
        id: 1,
        img:Nurshing_services ,
        imgData: 'Skilled Nursing Services',
        imgDescription: 'We provide skilled nursing service by or under the supervision of a Registered Nurse and in accordance with the Plan of Treatment'
    },
    {
        id: 2,
        img: Behaviour_thearapy,
        imgData: 'Behavior Therapy',
        imgDescription: 'Individualized behavioral therapy based on the principles of Applied'
    },
    {
        id: 3,
        img:Home_healthaide ,
        imgData: 'Home Health Aide',
        imgDescription: 'Assistance and training to the patient in activities of daily living, supportive care, and supervision'
    },
    {
        id: 4,
        img: music_thearapy,
        imgData: 'Music Therapy',
        imgDescription: 'To improve mood, educational performance, social skills, and overall functional expression'
    },
    {
        id: 5,
        img: artThearapy,
        imgData: 'Art Therapy',
        imgDescription: 'To provide positive results in developing their social and motor skills, developing art projects.'
    }
    ])

    const CardsDetail = card.map((item) => {
        return (
             <div className='card-container'>
                <div className='row '>
                    <div className='col'>
                <div className=" card" style={{ width: '18rem' }}>
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.imgData}</h5>
                        <p className="card-text">{item.imgDescription}</p>
                    </div>
                </div>
                </div>
             </div>
             </div>
             
        )

    })

    return (
        <>
        <div className='container card-div'>
            {CardsDetail}

        </div>
        </>
    )
}

export default Cards