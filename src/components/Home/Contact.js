import React from 'react'
import Title from '../Globals/Title'

export default function contact() {
  return (
    <section className="contact py-5">
    <Title title="contact us"/>
    <div className="row">
    <div className="col-10 col-sm-8 col-md-6 mx-auto">
        
        <form id="my-form"  action="https://formspree.io/f/xdopwakz"  method="POST">
         <div className="form-group">
          <label htmlFor="name">Name </label>
          <input type="text" className="form-control" name="name" id="name" placeholder="your name"></input>
         </div>
         <div className="form-group">
          <label htmlFor="email">Email </label>
          <input type="text" className="form-control" name="_replyto" id="email" placeholder="ahmmma@mail.com"></input>
         </div>
         <div className="form-group">
           <label htmlFor="description">Description </label>
        <textarea name="message" id="description" className="form-control" row="10" placeholder="write your massege here..."> </textarea>
         </div>

         <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">submit</button>

        </form>

    </div>

    </div>

    </section>
  )
}
