import React from "react";
import '../src/login.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Login extends React.Component
{
    
    constructor(props)
    {
        super(props);
    }

       
    login=()=>{

        var e=document.getElementById('role').value;
        
         if(e === "admin")
         {
        const email=document.getElementById('email').value;
        const pass=document.getElementById('pass').value;
        fetch('http://localhost:5000/alogin',{
            method:'POST',
            body:JSON.stringify({
                email:email,
                pass:pass
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(data=>{
            return data.json()
        })
        .then(result=>{
            if(result.error){

                toast.error(result.error,{autoClose:2000})
            }else{
                toast.success('Login successful', {autoClose:3000})
                localStorage.setItem('token',result.token);
                this.props.nav('/addjob');
            }   
        })
       }
    else
       {
        const email=document.getElementById('email').value;
        const pass=document.getElementById('pass').value;
        fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({
                email:email,
                pass:pass
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(data=>{
            return data.json()
        })
        .then(result=>{
            if(result.error){
               toast.error(result.error,{autoClose:3000})
            }else{
                toast.success("Login Sucessfull",{autoClose:3000})
                localStorage.setItem('token',result.token);
                this.props.nav('/home');
            }
        })   
       }
    }
    render()
    {
        return(
            <div className="body" >
                <h1 id="log">Login Form</h1>
                <div id="Container">
                    <label id="lab" >Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='text' placeholder="Email" id="email" />
                    <br/>
                    <br/>
                    <label id="lab">Password</label>&nbsp;&nbsp;&nbsp;
                    <input type='password' placeholder="Password" id="pass" />
                    <br/>
                    <br/>
                    <label  id="lab" for="cars">Select your Role&nbsp;&nbsp;</label>
                       <select name="user" id="role">
                        <option id="op" value="admin">Admin</option>
                        <option id="op" value="candidate">Candidate</option>
                       </select>
                       <br/> <br/>
                    <hr></hr>
                    <br/>
                    <button id="but-1" onClick={this.login}>Login</button>
                    <br/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not a User ? Create an Account</p>
                    <hr/>
                    <button className="butad" onClick={()=>{
                        this.props.nav('/asignup')
                    }}>Admin Signup</button>
                    <button className="butcan" onClick={()=>{
                        this.props.nav('/usignup')
                    }}>Candidate Signup</button>
                </div>
            </div>
        );
    }
}

export default Login;