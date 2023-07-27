import { useState } from "react"
import "./contact.scss"

const Contact = () => {
  const [message,setMessage]= useState(false)

  const handleClick=(e)=>{
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
          <div className="left">
            <img src="asset/shake.svg"/>
          </div>
          <div className="right">
            <h2>Contact</h2>
            <form action="">
              <input type="text" placeholder="email" />
              <textarea placeholder="message" name="" id="" ></textarea>
              <button type="submit" onClick={handleClick}>Send</button>
              {message && <p>Thanks, i will replay Asap,:)</p>}
            </form>
          </div>
    </div>
  )
}
//{}[]
export default Contact