import React from "react";
import Anavbar from "../anavbar";
import '../candidate/profile.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Asatus extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={
            tog:true
        }
    }

    getstatus=()=>{
        var u_id=localStorage.getItem('user_id').toString();
        console.log(u_id)
        const msg=document.getElementById('msg').value;
        fetch('http://localhost:5000/status/'+u_id,{
            method:'POST',
            body:JSON.stringify({
                msg
            }),
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        })
        .then(data=>{
          return data.json()
        })
        .then(result=>{
            if(result.Success)
            {
                toast.success(result.Success,{autoClose:3000})
            }
        })
    }
    
    render()
    {
        return this.state.tog?(
            <div>
                <Anavbar />
                <div style={{backgroundColor:"#ecc5f9",padding:"15px"}}>
                <h2 style={{color:"rgb(61, 60, 60)"}}>Send a Message to the Candidate</h2>
                <textarea id="msg" name="msg" rows="4" cols="50" style={{backgroundColor:"rgb(61, 60, 60)",color:"white",fontSize:"17px",boxShadow:"1px 2px 7px 1px black",border:"1px solid white",borderRadius:"12px"}}>
                </textarea>
                <button style={{marginLeft:"-35%",height:"30px",backgroundColor:"#80f176",border:"1px solid rgb(61, 60, 60)",position:"relative",width:"80px",marginTop:"5%"}} onClick={()=>{
                    this.getstatus()
                }}>Send</button>
                <br/>


                <br/><br/><br/>
                </div>
            </div>
        ): (
            <div>
              
            </div>
        );
    }
}

export default Asatus;