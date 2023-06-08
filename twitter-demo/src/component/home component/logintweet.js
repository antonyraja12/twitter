import React from "react";
import { Globe, Person, Image, FiletypeGif, EmojiSmile, GeoAltFill, } from "react-bootstrap-icons";

export function Usertweetbar() {
    return (<>
        <div className=" col-lg-2">
            <img src='https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg' alt="no pic" className="container-fluid rounded-circle" />
            {/* <Person className="fs-2 bg-warning rounded-5 p-1" /> */}
        </div>
        <div className="col-lg-9">
            <select className="rounded-3">
                <option className="">Everyone</option>
                <option>Twitter Circle</option>
            </select><br />
            <textarea name="postContent" rows={3} cols={40} className="border-0 out" />
            <hr />
            <div style={{ color: "rgb(107, 193, 240)" }}>
                <Image /> <FiletypeGif /> <EmojiSmile />  <GeoAltFill />   <button className="btn btn-primary rounded-4 float-end"> Tweet</button>

                {/* <button type="button" class="btn btn-secondary"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="This top tooltip is themed via CSS variables.">
                    Custom tooltip
                </button> */}
            </div>
        </div>
    </>);
}