import "./portfoliolist.scss"

const Portfoliolist = ({title,active,setSelect,id}) => {
  return (
    <li className={active? "portfoliolist active":"portfoliolist"} onClick={()=>setSelect(id)}>{title}</li>
  )
}

export default Portfoliolist