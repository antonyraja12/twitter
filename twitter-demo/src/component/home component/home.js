import React, { Profiler, useEffect, useState } from "react";
import './home.css'
import { Navbar } from "../nav/navbar";
import { Search } from "react-bootstrap-icons";
import { Followlist } from "./followlist";
import { Homenav } from "../nav/homenav";
import { Usertweetbar } from "./logintweet";


export function Homepage() {




    return (


        <>
            <div className=" ">
                <div className="col-lg-10 mx-auto row">
                    <div className="col-lg-3 sticky-top">
                        <Navbar />
                    </div>
                    <div className="col-lg-6 pt-3 border">
                        <Homenav />

                        <div className="row mt-4 pt-4 border">
                            <Usertweetbar />
                        </div>
                        <div className="">
                            dgfshdghsgdjsagdjhagfjagfadgfjhadgfhagf
                        </div>


                    </div>
                    <div className="col-lg-3 mt-3">
                        <div className="border border-dark  rounded-4 ps-1   searchbar "><Search /><input type="text" className="border-0 out " /></div>

                        <div className="mt-3 ">
                            <h3>Whats Happening</h3>
                            <ul className="list-group">
                                <li className="list-group">politic</li>
                                <li className="list-group">Sports</li>
                                <li className="list-group">Economics</li>

                            </ul>
                        </div>
                        <hr />
                        <div>
                            <Followlist />
                        </div>
                    </div>



                </div>

            </div>

        </>);
}



{/* <ReactPlayer url={vid} controls={true}/> */ }
// const vid="https://youtu.be/AZxGS9KOgko";