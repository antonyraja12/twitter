import React from "react";
import { CheckCircle, Textarea } from "react-bootstrap-icons";
import axios from 'axios'



export function Signup() {

    const name = () => {
        let name = document.getElementById('name').value;
        let ptn = new RegExp(/^[A-z0-9]{3,25}$/)
        if (ptn.test(name)) {
            document.getElementById('name').style.border = '3px solid green'

        }
        else {
            document.getElementById('name').style.border = '3px solid red'
        }

    }
    const email = () => {
        let email = document.getElementById('email').value;
        let ptn = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        if (ptn.test(email)) {
            document.getElementById('email').style.border = '2px solid green'

        }
        else {
            document.getElementById('email').style.border = '2px solid red'
        }


    }
    const Mobile = () => {
        let mobile = document.getElementById("mobile").value;
        let ptn = new RegExp(/^[0-9]{10}$/
        );
        if (ptn.test(mobile)) {
            document.getElementById('mobile').style.border = '2px solid green'

        }
        else {
            document.getElementById('mobile').style.border = '2px solid red'
        }

    }

    const Password = () => {
        let password = document.getElementById('password').value;

        let ptn = new RegExp(/^[A-Za-z!@#$%^_0-9]{8,15}$/)
        if (ptn.test(password)) {
            document.getElementById('password').style.border = '2px solid green'

        }
        else {
            document.getElementById('password').style.border = '2px solid red'
        }

    }
    const Cpassword = () => {
        let password = document.getElementById('password').value;

        let cpassword = document.getElementById('cpassword').value;
        if (cpassword == password) {
            document.getElementById('cpassword').style.border = '2px solid green'
        }
        else {
            document.getElementById('cpassword').style.border = '2px solid red'
        }

    }



    const register = async () => {
        var config = { header: { 'enctype': 'multipart/form-data' } }
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var dateofbirth = document.getElementById('date').value;
        var mobile = document.getElementById('mobile').value;
        var password = document.getElementById('password').value;
        var cpassword = document.getElementById('cpassword').value;

        if(name ==''|| name==null){
            alert("Name Field need a value")
        }
        else if(email==''|| email==null){
            alert('Email id Fileds is empty');
        }
        else if(mobile==''|| mobile==null){
            alert('Enter the Mobile no');
        }
        else if(password ==''|| cpassword == null){
            alert('password mismatched')
        }
        else{
            axios.post('http://localhost:4040/registration',{name,email,dateofbirth,mobile,password},config)
            .then((response)=>{
                if(response.data.status==='error'){
                    alert('error');
                }
                else if(response.data.status ==='success'){
                    alert('success');
                    window.location.href='/login';

                }
            
            })
            .catch((error)=>{
                alert('catch error');
            })
            
        }
    }

    return (
        <>
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <h1 className="text-center">Signup form</h1>
                    <form onSubmit={register}>
                        <div className="text-center formdiv">
                            <label className="col-lg-4 text-start">Enter Your Name</label>
                            <input type="text" name="name" id='name' className="inputbox col-lg-4" onKeyDown={name} ></input><span id="check"></span>

                        </div>
                        <div className="text-center">
                            <label className="col-lg-4 text-start">Enter Your Email id</label>
                            <input type="email" name="email" id='email' className="inputbox col-lg-4" onKeyDown={email} ></input>

                        </div>
                        <div className="text-center">
                            <label className="col-lg-4 text-start">Date Of Birth</label>
                            <input type="date" name="dateofbirth" id='date' className="inputbox col-lg-4" ></input>

                        </div>
                        <div className="text-center">
                            <label className="col-lg-4 text-start">Mobile No</label>
                            <input type="tel" name="mobile" id='mobile' className="inputbox col-lg-4" onKeyDown={Mobile} ></input>

                        </div>
                        <div className="text-center">
                            <label className="col-lg-4 text-start">Password</label>
                            <input type="password" name="password" id='password' className="inputbox col-lg-4" onKeyDown={Password} ></input>

                        </div>
                        <div className="text-center">
                            <label className="col-lg-4 text-start">Confirm Password</label>
                            <input type="password" name="cpassword" id='cpassword' className="inputbox col-lg-4" onChange={Cpassword} ></input> <span id="mismatch"></span>

                        </div>
                        <div className="text-center"><input type="submit" value='Register' className="btn btn-primary" /></div>


                    </form>
                </div>

            </div>

        </>
    );
}