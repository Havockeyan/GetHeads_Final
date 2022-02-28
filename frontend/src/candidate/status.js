import React from "react";
import Navbar from "../navbar";



class Status extends React.Component
{
    
    constructor(props)
    {
        super(props)
            this.state={
                togg:false
            }
        this.result=[]
    }
    componentDidMount()
    {
        this.showstatus();
    }

    showstatus=()=>{
        // const data = localStorage.getItem('tempcompany').toString();
        fetch('http://localhost:5000/ustatus',{
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        })
        .then(data=>{
            return data.json()
        })
        .then(details=>{
            this.result=details;//{data: [{},{},{}]}
            console.log(this.result)
            this.setState({togg: true});
        })
    }

    render() {
        return this.state.togg? (
             <div>
                 <Navbar />
                 <div  style={{padding:"10px",backgroundColor:"#868a7e"}}>
                 {this.result.data.map((data) => {
                     return(<div>
                        <p style={{fontSize:"22px"}}>Company Name : {data.compid.name}</p>
                        <h3 style={{color:"#ec504b"}}>Status : {data.status}</h3>
                        <hr style={{color:"white"}} ></hr>
                        <br/>
                        
                        </div>   );
                 })}
                 </div>
                                        
             </div>
        ) : (
            <div>
               <h1>You have not Applied for any Jobs!!</h1>
            </div>
        );
    }
}
export default Status;