import React from "react";
import Navbar from "../navbar";
import '../candidate/mcq.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Mcq(props){
    const data = localStorage.getItem('tempcompany').toString();
    return(
        <Mcq1 data={data} />
    );
}

class Mcq1 extends React.Component
{
    constructor(props)
    {
        super(props)
        // console.log(this.props.data)
        this.compid=this.props.data
    }

    submitans=()=>{

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
                mongodb: document.getElementsByName('backend')[2].checked,
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
                if(mcqarr.thirdqn.mongodb == true )
                ans[i++]="Mongodb"
                if(mcqarr.thirdqn.sqlite == true )
                ans[i++]="Sqlite"
        }
        mcq=ans

        fetch('http://localhost:5000/applyjob/'+this.compid,{
            method:'POST',
            body:JSON.stringify({
                mcq:mcq
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
            if(result.success)
            {
             toast.success(result.success,{autoClose:3000})   
            }
            else
            {
                console.log('Not applied')
            }
        })
        
    }
    
render()
{
    return(
       
        <div>
             <Navbar/>
             <div className='profile'>
            <h1 className="question">
                Select Your Known Qualifications
            </h1>
            <br/>
        <div className="mainbox" id="dat">
                <h2 className="que">1.Known Programming Languages</h2>                 {/*first qn*/}
                <div id="data">
                        <label className="new">
                        <input type="checkbox" name="languages" value="c" className="check" />
                        &nbsp;&nbsp;c
                        </label>
                        
                        <label className="new">
                        <input type="checkbox" name="languages" value="c" className="check"/>
                        &nbsp;&nbsp;c++
                        </label>
                       
                        <label className="new">
                        <input type="checkbox" name="languages" value="c" className="check"/>
                        &nbsp;&nbsp;Java
                        </label>
                        
                        <label className="new">
                        <input type="checkbox" name="languages" value="c" className="check"/>
                        &nbsp;&nbsp;Python
                        </label>
                </div>
            
                <h2 className="que">2.Well Trained Frontend Technologies</h2>
                <div>
                        <label className="new">
                        <input type="checkbox" name="frontend" value="c" className="check"/>
                        &nbsp;&nbsp;HTML
                        </label>
                        <label className="new">
                        <input type="checkbox" name="frontend" value="c" className="check"/>
                        &nbsp;&nbsp;React js
                        </label>
                       
                        <label className="new">
                        <input type="checkbox" name="frontend" value="c" className="check"/>
                        &nbsp;&nbsp;Angular js
                        </label>
                </div>
              
                
                <h2 className="que">3.Backend Tools</h2>
                <div>
                        <label className="new">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Firebase
                        </label>
                       
                        <label className="new">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Mysql
                        </label>
                       
                        <label className="new">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;mongodb
                        </label>
                        
                        <label className="new">
                        <input type="checkbox" name="backend" value="c" className="check"/>
                        &nbsp;&nbsp;Sqlite
                        </label> 
                </div>
                <div>
                <button className="submit" onClick={this.submitans} >Submit</button>
                </div>  
            </div>
        </div>
            </div>
    );
}
}
export default Mcq;