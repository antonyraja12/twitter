import React from "react";
import './landpage.css'
import { useState } from "react";
import { useEffect } from "react";
import { Person, Lock, Info } from "react-bootstrap-icons";
import axios from "axios";
import { Popover } from "bootstrap";


export function Logintweet() {
    

    const Validate =  () => {
        var config = { header: { 'enctype': 'multipart/form-data' } }
        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        
        if(email ==''|| email==null){
            document.getElementById('info').innerHTML="Email field is empty";
        }
        
        else if(password ==''|| password==null){
            document.getElementById("pwd").innerHTML="password field is empty"
        }
        else{
            
            axios.post('http://localhost:4040/userlogin',{email,password},config)
            .then((response)=>{
                if(response.data.status ==='error'){
                    alert('error');
                }
                else if(response.data.status ==='success'){
                    alert('success');  
                    window.location.href='/homepage/foryou';

                }
            })
            .catch((error)=>{
                alert('Catch error');
            })

            
        }
    }


    
    return (<>
        <div className="col-11 col-lg-5 mx-auto">
            <div className="text-center">
                <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="no pic" className="col-3" />

                <h1 className="col-12  fw-bold">Log in to Twitter</h1>

                <form onSubmit={Validate}>
                    <div className="emailfield  "> <Person className="fs-1" />
                        <input type="text" id='email'name="email"  className='col-12 col-lg-6 inputcls ' placeholder="Enter your Email"/><br/><span id='info' className="text-danger "></span>
                    </div><br />
                    <div className="emailfield mt-2">  <Lock className="fs-1 fw-2" />
                        <input type="password" id='password'name="password" className='col-12 col-lg-6 inputcls' placeholder="Enter your Password" /><br/><span id='pwd' className="text-danger"></span>
                    </div><br />
                    <input type="submit" value='LOGIN' className="col-12 col-lg-6 btn btn-primary  rounded-5 mt-5"/><br />
                    <p className="m-4"> <span className="text-primary p-3">Forgot password?</span>
                        <span className="text-primary">Sign up for Twitter</span></p>
                </form>
            </div>
        </div>


    </>);
}

