import React from "react";
import Anavbar from "../anavbar";
import '../candidate/profile.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



class Aprofile extends React.Component
{
    constructor(props)
    {
       
        super(props)
        this.state={
            tog:false
        }
        this.result=""
    }

    componentDidMount() {
        this.getprofile();
    }


    getprofile=()=>{
        var u_id=localStorage.getItem('user_id').toString()
        console.log(u_id)
        fetch('http://localhost:5000/vprofile/'+u_id,{
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
           this.result=result
           this.setState({tog: true});
           
        })
    }
    

    render()
    {
        return this.state.tog?(
            <div style={{backgroundColor:"#868a7e"}}>
                <Anavbar />
                <div id="card">
                <h1 style={{backgroundColor:"#55b8ed",padding:"5px"}}>Profile</h1>
                <h2>Name : {this.result.name}</h2>
                <h2>DOB&nbsp; : &nbsp;{this.result.dob}</h2>
                <h2>Age &nbsp;: &nbsp;{this.result.age}</h2>
                <h2>Address &nbsp;&nbsp;&nbsp;: {this.result.address}</h2>
                <h2>Experience : {this.result.exp}</h2><br/>
                <hr/>
                <br/>
                </div>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
            </div>
        ): (
            <div>
              false
            </div>
        );
    }
}

export default Aprofile;