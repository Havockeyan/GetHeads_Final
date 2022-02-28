import React from "react";
import '../candidate/uhome.css'
import Navbar from "../navbar";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            getData: false,
            url: ""
        }
        this.result = []
        this.user=""
    }

    componentDidMount() {
        this.getData();
    }

    getData = ()=>{
        fetch('http://localhost:5000/uhome',{
            headers:{
                'Content-Type':'application/json',
                'token':localStorage.getItem('token').toString()
            }
        })
        .then(response => {
            return response.json()
        })
        .then(result => {
            this.result = result.data;
            this.user=result.ur;
            const uri = "http://localhost:5000/images/" + this.result.imgurl;
            toast.info("Welcome "+this.user,{autoClose:8000})
            this.setState({getData: true,url:uri});
        })
    }

     
   applyjob=(c_id)=>{
       this.props.nav('/mcq')
       localStorage.setItem('tempcompany',c_id);
   }

    render() {
        return this.state.getData ? (
             <div>
                 <Navbar />
                 <p style={{fontSize:"23px",marginLeft:"30px"}}>Welcome, <span style={{color:"#ee5d68",fontWeight:"bold"}}>{this.user}...</span></p>
                  <h1 id="head1">Find Your Jobs Here</h1>

                {this.result.map((result,index) => {
                    return(
                       <div>
                        <div id="post">
                            <div id="details">
                                <img src={this.result.url}></img>
                            <h1 id="head">{result.name}</h1>
                            <h2>Role : {result.title}</h2>
                            <h3>Description : {result.desc}</h3>
                            <hr ></hr>
                            <br/>
                            <button name={result._id} type="button"  className="button" onClick={() => {
                                this.applyjob(result._id)
                            }} >Apply Job</button>
                            </div>
                        </div>
                        </div>
                    );
                })}
             </div>
        ) : (
            <div>
                false
            </div>
        );
    }
}

export default Homepage;