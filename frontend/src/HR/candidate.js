import React from "react";
import Anavbar from "../anavbar";
import "../HR/candidate.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class List extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={
                togg:true
            }
           this.datas=[]
        }
    }

    sort=()=>{
        var mcqarr={
            firstqn: {
                c: document.getElementsByName('languages')[0].checked,
                cpp: document.getElementsByName('languages')[1].checked,
                java: document.getElementsByName('languages')[2].checked,
                python: document.getElementsByName('languages')[3].checked
            },
            secondqn: {
                html: document.getElementsByName('frontend')[0].checked,
                react: document.getElementsByName('frontend')[1].checked,
                angular: document.getElementsByName('frontend')[2].checked
            },
            thirdqn: {
                firebase: document.getElementsByName('backend')[0].checked,
                mysql: document.getElementsByName('backend')[1].checked,
                Mongodb: document.getElementsByName('backend')[2].checked,
                sqlite: document.getElementsByName('backend')[3].checked
            }
        }
       
        var ans=[]
        var mcq=[]
        
        for(var i=0;i<1;)
        {
                if(mcqarr.firstqn.c == true)
                ans[i++]="c"
                if(mcqarr.firstqn.cpp == true )
                ans[i++]="c++"
                if(mcqarr.firstqn.java == true )
                ans[i++]="java"
                if(mcqarr.firstqn.python == true )
                ans[i++]="Python"
            
                if(mcqarr.secondqn.html == true )
                ans[i++]="HTML"
                if(mcqarr.secondqn.react == true )
                ans[i++]="React js"
                if(mcqarr.secondqn.angular == true )
                ans[i++]="Angular js"

                if(mcqarr.thirdqn.firebase == true )
                ans[i++]="Firebase"
                if(mcqarr.thirdqn.mysql == true )
                ans[i++]="Mysql"
                if(mcqarr.thirdqn.Mongodb == true )
                ans[i++]="Mongodb"
                if(mcqarr.thirdqn.sqlite == true )
                ans[i++]="Sqlite"
        }
        mcq=ans
        console.log(mcq)
        fetch('http://localhost:5000/viewlist',{
            method:'POST',
            body:JSON.stringify({
                mcq
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
            this.datas=result
            if(result.error)
            {
           toast.warning(result.error,{autoClose:3000})
            }
            else{
            this.setState({togg:false});
            }
        })
    }
   
    status=(u_id)=>{
        console.log(u_id)
        localStorage.setItem('user_id',u_id);
        this.props.nav('/a_status')
        
    }

    profile=(u_id)=>{
        console.log(u_id)
        localStorage.setItem('user_id',u_id);
        this.props.nav('/a_profile')
    }

    render()
    {
        return this.state.togg ?(
        <div>
            
            <Anavbar/>
          <p style={{color:"white"}}> {toast.info("Select 2 Skills to Sort",{autoClose:9000})}</p>
            <div className="main">
            <div >
                <h1 style={{textAlign:"center",color:"white"}}>Sort Candiadtes</h1>
               
                <label className="new1">
                        <input type="checkbox" name="languages" value="c" className="check" />
                        &nbsp;&nbsp;c
                        </label>
                         
                        <label className="new1">
                        <input type="checkbox" name="languages" value="c" className="check"/>
                        &nbsp;&nbsp;c++
                        </label>
                       
                        <label className="new1">
                        <input type="checkbox" name="languages" value="c" className="check"/>
                        &nbsp;&nbsp;Java
                        </label>
                        
                        <label className="new1">
                        <input type="checkbox" name="languages" value="c" className="check"/>
                        &nbsp;&nbsp;Python
                        </label>
                </div>
            
              <br/>
              <br/>
                <div>
                        <label className="new1">
                        <input type="checkbox" name="frontend" value="c" className="check"/>
                        &nbsp;&nbsp;HTML
                        </label>
                        <label className="new1">
                        <input type="checkbox" name="frontend" value="c" className="check"/>
                        &nbsp;&nbsp;React js
                        </label>
                       
                        <label className="new1">
                        <input type="checkbox" name="frontend" value="c" className="check"/>
                        &nbsp;&nbsp;Angular js
                        </label>
                </div>
              
                <br/>
              <br/>
                <div>
                        <label className="new1">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Firebase
                        </label>
                       
                        <label className="new1">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Mysql
                        </label>
                       
                        <label className="new1">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Mongodb
                        </label>
                        
                        <label className="new1">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Sqlite
                        </label> 
                        <div className="buttons">
                        
                        <button className="submit" onClick={()=>{
                            this.sort()
                        }} >Sort</button>
                       
                        </div>
                        <br/> 
                        </div>
            </div>
        </div>
        ) : (
            <div>
                <h1 style={{color:"white",backgroundColor:"rgb(61, 60, 60)",padding:"10px"}}>Final Candidates List</h1>
                     {this.datas.map((result)=>{
                                return(
                                    <div style={{backgroundColor:"#ece346",padding:"5px"}}>
                                        <p style={{color:"rgb(61, 60, 60)",fontSize:"22px",fontWeight:"bold",fontFamily:"sans-serif"}}>{result.name}</p>
                                        
                                        <button id="pr" onClick={()=>{
                                            this.profile(result._id)
                                        }} >View Profile</button>
                                      
                                        <button id="st" onClick={()=>{
                                            this.status(result._id)
                                        }}>Appoint</button>
                                         <br/>
                                        <br/>
                                        <hr/>
                                    </div>
                                );
                    })} 
            </div>
        );
    }
}

export default List