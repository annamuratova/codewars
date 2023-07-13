import img from "../assets/images/codewars.png"
import {useState, useContext} from "react"
import { ApiContext } from "../App";
import "../assets/styles/home.css"

function Home(){
   const {name, setName, handleSubmit} = useContext(ApiContext);
   
    return(
        <div className="wrapper">
            <div className="home">
                <div className="home__image">
                    <img src={img} alt="" />
                </div>
                <form className="home__form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Codewars user name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <button>Kirish</button>
                </form>
            </div>
        </div>
    )
}

export default Home