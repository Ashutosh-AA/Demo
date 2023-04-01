import React from 'react'
import img from '../content/pexels.jpg';
import './jumbotron.css'

function Jumbotron() {
    return (
        <>
        <div className='main-div'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col col-content">
                        <h3 style={{color:'#8b8b8b'}}>Welcome to</h3>
                        <h2>A Special Angel’s Touch</h2>
                        <p style={{color:'#8b8b8b'}}>A Special Angel’s Touch is a Nurse Registry & Behavior Therapies who provide medical and non - medical services for children and adults with Special Needs and Developmental Disabilities in the comfort of their residence. Our mission is to provide optimal quality services to those with such but not limited to, Quadriplegia, Down Synd rome, Autism, & others. We serve clients within the areas of Miami - Dade, Broward, and Monroe County in the state of Florida. Our team members are knowledgeable, and willing to go the extra mile in providing all the physical, mental, and emotional support y our loved one needs</p>
                    </div>
                    <div class="col  img-class">
                        <img src={img} className='img-main' />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron