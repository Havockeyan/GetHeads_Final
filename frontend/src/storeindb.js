// import React from "react";

// class Storeindb extends React.Component{

//     constructor(props){
//         super(props);
//     }

//     sendData = () => {
//         const email = document.getElementById('email').value;
//         const pas = document.getElementById('pas').value;
//         fetch('http://localhost:5000/login',{
//             method: 'POST',
//             body: JSON.stringify({
//                 email: email,
//                 pass: pas
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//                 'token': localStorage.getItem('token').toString()
//             }
//         })
//         .then(response => {
//             return response.json();
            
//         })
//         .then(result => {
//             localStorage.setItem('token',result.token);
//             // localStorage.getItem('token');
//             console.log(result)
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <label>Email:</label>
//                 <input type="text" id="email" />
//                 <br/>
//                 <label>password:</label>
//                 <input type="text" id="pas" />
//                 <br/>
//                 <button onClick={this.sendData}>Login</button>
//             </div>
//         );
//     }
// }

// export default Storeindb;