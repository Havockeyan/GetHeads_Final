import React from "react";
import Navbar from "../navbar";
import '../candidate/edit.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Edit extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            tog:false
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

    save=()=>{
        const name=document.getElementById('name').value;
        const dob=document.getElementById('dob').value;
        const age=document.getElementById('age').value;
        const address=document.getElementById('add').value; 
        const exp=document.getElementById('exp').value;

        fetch('http://localhost:5000/userupdate',{
            method:'POST',
            body:JSON.stringify({
                name:name,
                age:age,
                dob:dob,
                address:address,
                exp:exp
            }),
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        })
        .then(data=>{
            return data.json()
        })
        .then(dat=>{
            if(dat.success)
            {
                toast.success(dat.success,{autoClose:3000})
                this.props.nav('/profile')
            }
        })
    }

    render()
    {
        return this.state.tog?(
            <div>
               
                <Navbar />
                <h2 style={{textAlign:'center',fontWeight:"bolder"}}>Edit Your Profile</h2>
                <div id="maincard">
                <label id="label" >Name : &nbsp;&nbsp;</label>
                <input type="text" id="name" defaultValue={this.result.name} />
                <br/>
                <br/>
                <label id="label" >DOB &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="dob" defaultValue={this.result.dob} />
                <br/>
                <br/>
                <label id="label" >Age &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</label>
                <input  type="text" id="age" defaultValue={this.result.age} />
                <br/>
                <br/>
                <label id="label">Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</label>
                <input  type="text" id="add" defaultValue={this.result.address} />
                <br/>
                <br/>
                <label id="label">Experience :&nbsp;&nbsp;</label>
                <input  type="text" id="exp" defaultValue={this.result.exp} />
                <br/>
                <br/>
                <hr/>
                <br/>
                <button id="button" onClick={this.save}>Save</button>
                </div>
            </div>
        ): (
            <div>
              
            </div>
        );
    }
}

export default Edit;
