import React from "react";
import { Bell, Bookmark, Envelope, Hash, House, PatchCheck, Person, ThreeDots, Twitter, } from "react-bootstrap-icons";
export function Navbar(){


    return(
    <>
      <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="no pic" className="col-3" />
                        <ul class="list-group">
                            <li class="list-group items fs-4" ><span className="p-1"> <House /> Home </span></li>
                            <li class="list-group items fs-4"><span className="p-1"><Hash /> Explore</span></li>
                            <li class="list-group items fs-4"><span className="p-1"><Bell /> Notifications </span></li>
                            <li class="list-group items fs-4"><span className="p-1"><Envelope /> Messages</span></li>
                            <li class="list-group items fs-4"><span className="p-1"><Bookmark /> Bookmarks</span></li>
                            <li class="list-group items fs-4"><span className="p-1"><Twitter /> Twitter Blue</span></li>
                            <li class="list-group items fs-4"><span className="p-1"><PatchCheck /> Verified </span></li>
                            <li class="list-group items fs-4"><span className="p-1"><Person /> Profile </span></li>
                            <li class="list-group items fs-4"><span className="p-1"><ThreeDots /> More</span></li>
                            <li class="list-group items fs-4"><button className="btn btn-primary rounded-5">Tweet</button></li>
                            <div>
                                
                            </div>
                            
                        </ul>
    
    </>);
}