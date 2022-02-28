import React from "react";
// import "../HR/asign.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Asign extends React.Component
{
    constructor(props)
    {
        super(props)
            this.state={
                togg:true
            }
            this.selectedFile = null;
    }

    asignup=()=>{
        const name=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const pass=document.getElementById('pass').value;
        
        const A_data = new FormData();
        A_data.append('name', name);
        A_data.append('email',email);
        A_data.append('pass',pass);
        A_data.append('image',this.selectedFile);
       
         console.log(A_data)

          fetch('http://localhost:5000/adminsignup',{
              method:'POST',
              body:A_data
          })
          .then(data=>{
              return data.json()
          })
          .then(result=>{
              if(result.Success)
              {
                  toast.success(result.Success,{autoClose:3000})
                  this.props.nav('/')
              }
              else
              toast.error(result.error,{autoClose:3000})
          })
    }
    onFileChange = (event) => {
        this.selectedFile = event.target.files[0];
}

    render() {
        return this.state.togg? (
             <div >
                   <h1 id="log">Signup Form Form</h1>
                 <div style={{marginTop:"5%"}} className="container">
    <h1 style={{textAlign:"center",color:"white"}}>Admin Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label ><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Email" id="email"/>
    <br/>
    <br/>
    <label ><b>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="password" placeholder="Enter Password" id="pass"/>
    <br/>
    <br/>
    <label ><b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Your Name" id="name" />
    <br/>
    <br/>
    <label>Upload Your image:</label>
  <input type="file" onChange={this.onFileChange}></input>
  <br/>
    <p>By creating an account you agree to our <a href="#" style={{color:"red"}}>Terms & Privacy</a></p>
<br/>
    <div className="clearfix">
      <button id="sign" onClick={this.asignup} >Sign Up</button>
    </div>
  </div> 
                </div>

        ) : (
            <div>
               <h1>false</h1>
            </div>
        );
}
}
export default Asign;

