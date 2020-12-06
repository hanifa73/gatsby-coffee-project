import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        
        <section className="py-5">
           
        <div className="container">
            <Title title="Our Story" > </Title>
         <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt vitae ratione, sunt porro error
                sapiente sequi neque, sit earum ab possimus iure laudantium quos illo? Eaque, quo ex ipsa enim cum reprehenderit
                 atque ut pariatur? Deserunt, consequuntur
                aperiam minus dolorem voluptas perspiciatis assumenda, dolores, aliquam asperiores magni minima vel provident.
            
             </p>
             <Link to="/about/">
                 <button className="btn text-uppercase btn-yellow "> ABOUT </button>
             </Link>
                
            
            
          </div> 
         </div>                      
        </div>
        </section>
    )
}
