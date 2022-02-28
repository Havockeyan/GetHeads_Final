import React from "react";
import Navbar from "../navbar";
import '../candidate/profile.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


class Profile extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={
            tog:false,
        }
        this.result=""
    }
    
    componentDidMount()
    {
        this.showprofile();
    }

    showprofile=()=>{
        fetch('http://localhost:5000/uprofile',
        {
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        }
        )
        .then(data=>{
            return data.json()
        })
        .then(detail=>{
            this.result=detail;
            
            this.setState({tog: true});
        })
    }

    logout=()=>{
        fetch('http://localhost:5000/ulogout',{
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        })
        .then(log=>{
            return log.json()
        })
        .then(logg=>{
            if(logg.success)
            {
           toast.success(logg.success,{autoClose:3000})
            this.props.nav('/');
            }
            else
            {
                console.log("NOT LOGOUT")
            }
        })
    }

    showpopup=()=>{
        this.props.nav('/edit')
    }

    render()
    {
        return this.state.tog?(
            <div style={{backgroundColor:"#868a7e"}}>
                <Navbar />
                <div id="card">
                <h1 style={{backgroundColor:"#55b8ed",padding:"5px"}}>Profile</h1>
                <img width="20%" src={this.state.url} />
                <h2>Name : {this.result.name}</h2>
                <h2>DOB&nbsp; : &nbsp;{this.result.dob}</h2>
                <h2>Age &nbsp;: &nbsp;{this.result.age}</h2>
                <h2>Address &nbsp;&nbsp;&nbsp;: {this.result.address}</h2>
                <h2>Experience : {this.result.exp}</h2><br/>
                <hr/>
                <br/>
                <div><button id="but1" onClick={this.logout}>LOGOUT</button></div>
                
                <div><button id="but2" onClick={()=>{
                    this.showpopup()
                }}>Edit</button></div>
                </div>
                <br/>
                <br/>
                
            </div>
        ): (
            <div>
              
            </div>
        );
    }
}

export default Profile;