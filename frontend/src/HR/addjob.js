import React from "react";
import Anavbar from "../anavbar";
import "../HR/addjob.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Addjob extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={
                togg:true
            }
            this.name=""
        }
    }


    componentDidMount() {
        this.getData();
    }

    getData=()=>{
        fetch("http://localhost:5000/addjob",{
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        })
        .then(dat=>{
            return dat.json()
        })
        .then(finaldata=>{
            this.name=finaldata;
            this.setState({togg:true})
          
            toast.info("Welcome "+this.name,{autoClose:8000}) 
        })
    }

    post=()=>{
         const name=document.getElementById('jname').value;
         const title=document.getElementById('title').value;
         const desc=document.getElementById('dsc').value;
         
         fetch('http://localhost:5000/addjob',{
             method:"POST",
             body:JSON.stringify({
                 name:name,
                 title:title,
                 desc:desc
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
             else
             {
                 console.log("Not Posted")
             }
         })
    }

    render()
    {
        return this.state.togg ?(
        <div>
            <Anavbar/>
            <p style={{fontSize:"23px",marginLeft:"30px"}}>Welcome, <span style={{color:"#ee5d68",fontWeight:"bold"}}>{this.name}...</span></p>
            <div id="jobcard">
                <h1>Add Your Job Details</h1>
                <label for="fname">Name:</label><br/><br/>
                <input type="text" id="jname" name="jname"  /><br/><br/>
                <label for="lname">Job Title:</label><br/><br/>
                <input type="text" id="title" name="title" /><br/><br/>
                <label for="fname">Description:</label><br/><br/>
                <input type="text" id="dsc" name="dsc" /><br/>
                <br/>
                <div><button id="but2" onClick={()=>{
                    this.post()
                }}>Submit Post</button></div>
            </div>
        </div>
        ) : (
            <div>false</div>
        );

    }
}

export default Addjob