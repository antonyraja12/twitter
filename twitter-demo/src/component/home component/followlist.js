import React, { useEffect, useState } from "react";
import { Person } from "react-bootstrap-icons";


export function Followlist(){
    const [follow, setFollow] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4040/whotofollow')
            .then(res => res.json())
            .then(follow => setFollow(follow));
        // console.log(follow);
        
    }, [])

    return(<>

<div>
                            <h3>Who  to follow</h3>
                            <ul className="list-gruop ">


                                {
                                    follow.map((value, index) => (
                                        <li className="list-group follow">
                                            <div className="row p-2 ">
                                                    <div className="col-lg-2"><Person className="bg-danger rounded-4"/></div>
                                                      <div className="col-lg-6">
                                                             {value.name}<br />
                                                             {value.email.slice(0,10)}...
                                                      </div>
                                                <div className="col-lg-4"><button className="btn btn-dark rounded-5">Follow</button></div>
                                            
                                            </div>
                                        </li>
                                    ))

                                }
                            </ul>

                        </div>

    </>)
}