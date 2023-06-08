import React from "react";
import { Link } from "react-router-dom";



export function Homenav(){
    
    

    return(
        <> 
         <div className=" sticky-top bgblur ">
        HOME
        <div className="row">

           <div className="col-lg-6 text-center " ><Link to='/homepage/foryou' className="nav-link active " > <p id='line'> For you</p> </Link></div>
            <div className="col-lg-6 text-center"><Link to='/homepage/following' className="nav-link active"   ><p id='line'> Following</p></Link> </div>
        </div>
    </div>
        </>
    )
}