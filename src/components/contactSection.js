import React from "react";

export default function ContactSection({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="contact">
         <h1>Contact</h1>
         <form action="https://formspree.io/TJKISNER@gmail.com" method="POST" >
         <div className="nameEmail">
         <input type="text" name="name" placeholder="Name"></input>
         <input type="text" name="email" placeholder="Email"></input>
         </div>
         <div className="subjectMessage">
         <input type="text" name="Subject" placeholder="Subject"></input>
         <textarea type="textarea" name="Message" placeholder="Message" className="textArea"></textarea>
         </div>

        <input type="submit" value="send"></input>
        <input type="reset"></input>
         </form>
         </div>
      </div>
    </div>
  );
}