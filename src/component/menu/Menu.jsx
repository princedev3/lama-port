import "./menu.scss"

const Menu = ({menuOpen,setMenuopen}) => {
  return (
    <div className={"menu "+ (menuOpen && "active") }>
        <ul>
            <li  onClick={()=>setMenuopen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#work">Work</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#testimonial">Testimonial</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#contact">Contact</a>
            </li>
          
        </ul>
    </div>
  )
}

export default Menu