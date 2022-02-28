import React from "react";
import "../candidate/sign.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Usign extends React.Component
{
    
    constructor(props)
    {
        super(props)
            this.state={
                togg:true
            }
            this.selectedFile = null;
    }

    signup=()=>{
        const email=document.getElementById('email').value;
        const pass=document.getElementById('pass').value;
        const name=document.getElementById('name').value;
        const age=document.getElementById('age').value;
        const dob=document.getElementById('dob').value;
        const add=document.getElementById('add').value;
        const exp=document.getElementById('exp').value;
        var frs;
        if (document.getElementById('yes').checked) {
            frs = true;
          }
          else
          frs=false;

          const data = new FormData();
          data.append('name', name);
          data.append('email',email);
          data.append('pass',pass);
          data.append('age', age);
          data.append('dob', dob);
          data.append('address', add);
          data.append('exp', exp);
          data.append('fresher', frs);
          data.append('image',this.selectedFile);

          fetch('http://localhost:5000/usersignup',{
              method:'POST',
              body: data
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
             <div>
               <h1 id="log">Signup Form Form</h1>
                 <div className="container">
    <h1 style={{textAlign:"center",color:"white"}}>Candidate Sign Up</h1>
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
    <label ><b>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Your Age" id="age" />
    <br/>
    <br/>
    <label ><b>DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Your DOB" id="dob" />
    <br/>
    <br/>
    <label ><b>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Your Address" id="add" />
    <br/>
    <br/>
    <label ><b>Experience&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Your Experience" id="exp" />
    <br/>

    <p style={{fontWeight:"bold"}}>Are You a fresher</p>
  <input type="radio" id="yes" name="yes" value="yes"/>
  <label >&nbsp;yes</label><br/>
  <input type="radio" id="no" name="no"  value='no'/>
  <label >&nbsp;No</label><br/>
  <label>Upload Your image:</label>
  <input type="file" onChange={this.onFileChange}></input>
    <p>By creating an account you agree to our <a href="#" style={{color:"red"}}>Terms & Privacy</a></p>
<br/>
    <div className="clearfix">
      <button id="sign" onClick={this.signup} >Sign Up</button>
    </div>
  </div> 
  <br/>
  <br/>
                </div>

        ) : (
            <div>
               <h1>false</h1>
            </div>
        );
}
}
export default Usign;

