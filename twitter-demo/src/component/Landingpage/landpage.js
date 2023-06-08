import React from "react";
import { Link } from "react-router-dom";


export function Landpage() {

    return (
        <>
            <div className="row  mx-auto">
                <div className="col-lg-7 ">
                    <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="no pic" className="col-10" />

                </div>
                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center">
                    <div className="">
                        <h1 className="fw-bold ">Happening now</h1>
                        <h3 className="mt-3">Login to twitter</h3>
                        <Link to='/signup'><input type="button" className="btn btn-info col-lg-12 col-5 mt-3  " value='Sign Up' /> </Link>
                        <Link to='/login'><input type="button" className="btn btn-outline-info col-lg-12  col-5 mt-3 ms-1" value='Login' /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}