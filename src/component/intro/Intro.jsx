import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

const Intro = () => {
  const textRef = useRef()
  useEffect(()=>{
    init(textRef.current, { showCursor: false,backDelay:1500,backSpeed:60,showCursor:true, strings:["Developer","Designer", 'Content Creator' ] })
  },[])
  return (
    <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="asset/man.png"/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'M</h2>
        <h1>Marvin Prince</h1>
        <h3>UI Developer <span ref={textRef}></span></h3>
      </div>
      <a href="#portfolio">
        <img src="asset/down.png"/>
      </a>
    </div>
    </div>
  )
}
// {}[]
export default Intro