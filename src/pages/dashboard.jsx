import "../assets/styles/dashboard.css"
import { useContext, useState, useEffect } from "react"
import  { ApiContext } from "../App"
import img1 from "../assets/images/vector1.png"
import img2 from "../assets/images/vector2.png"
import img3 from "../assets/images/vector3.png"

function Dashboard(){
    const {data, name, setName} = useContext(ApiContext);
    const[result, setResult] = useState([]);
    const url = "https://www.codewars.com/kata/"
   
    function getResult(){
    let page = 0;
    fetch(`https://www.codewars.com/api/v1/users/${name}/code-challenges/completed?page=${page}`)
    .then((response)=>response.json())
    .then((result)=>{
        setResult(result.data);
    });
    }

    useEffect(() => {
        getResult();
         setName('');
        // console.log(result);
      }, )
    
    return(
        <div className="container">
          <div className="head">
                <div className="flex">
                    <div className="head__user">
                        <img className="vector1" src={img1} alt="" width={400} height={40}/>
                        <img className="vector2" src={img2} alt=""/>
                        <img className="vector3" src={img3} alt=""/>
                        <span className="userName">{data.username}</span>
                        <span className="number">{data.honor}</span>
                        <span className="rank">{data.ranks.overall.name}</span> 
                    </div>
                    <p>{`Total Completed Kata: ${data.codeChallenges.totalCompleted}`}</p>
                </div>
               {
                data.name !== null ? <p className="head__name"> <b>Name:</b> {data.name}</p> : <p className="head__name"><b>Name:</b> Unknown</p>
               }
            </div> 
            <div className="title">Solution list</div>
            <div className="main">
               {
                result.map((item)=>{
                    return ( <div><a className="main__link" href={url + item.id} target="blank">{item.name}</a>
                            <p>{`CompletedLanguages: ${item.completedLanguages}`}</p></div>
                    )
                })
               }
                </div> 
         </div>
     )
 }

export default Dashboard