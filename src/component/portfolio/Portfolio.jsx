import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss"
import {featuredPortfolio ,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from "../../data"
//{}[]
const Portfolio = () => {
  const [select,setSelect]  = useState("featured")
  console.log(select)
  const [data,setData]= useState([])

  useEffect(()=>{
      switch(select){
        case "featured":
          setData(featuredPortfolio)
          break;
        case "web":
        setData(webPortfolio);
        break;
        case "mobile":
          setData(mobilePortfolio)
          break;
        case "design":
          setData(designPortfolio)
          break;
        case "content":
          setData(contentPortfolio)
          break
        default:
          setData(featuredPortfolio)
      }
  },[select])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      {
        list.map(item=>(
          <Portfoliolist key={item.id} id={item.id} title={item.title} setSelect={setSelect} active={select===item.id}/>
        ))
      }
      </ul>
      <div className="container">

      {
        data.map(d=>(

        <div className="item">
          <img src={d.img}/>
          <h3>{d.title}</h3>
        </div>
        ))
      }
       
         
      </div>
    </div>
  )
}
//{}[]
export default Portfolio