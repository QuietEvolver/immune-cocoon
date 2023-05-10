// import React, { Component } from 'react';
// const express = require("express");
// const router = express.Router();
// const path = require("path");


// export class Counter extends Component {
// router.get("/Create",(req,res)=>{
//     // res.send("Welcome to the home page")
//    res.sendFile(path.join(__dirname,"../views/index.html"))
// })

// const sneakerRoutes = require("./sneakerController");
// router.use("/api/sneakers",sneakerRoutes)

// const shirtsRoutes = require("./shirtsController");
// router.use("/api/shirts",shirtsRoutes)
//   // static displayName = Counter.name;

//   // constructor(props) {
//   //   super(props);
//   //   this.state = { currentCount: 0 };
//   //   this.incrementCounter = this.incrementCounter.bind(this);
//   // }

//   // incrementCounter() {
//   //   this.setState({
//   //     currentCount: this.state.currentCount + 1
//   //   });
//   // }
  

// fetch("/api/sneakers").then(res=>{
//   return res.json();
// }).then(data=>{
//   console.log(data)
//   data.forEach(shoe=>{
//       const newLi = document.createElement("li");
//       newLi.textContent = `${shoe.owner}'s ${shoe.color} ${shoe.name}`
//       document.querySelector("#sneakList").append(newLi)
//   })
// })

// sneakForm.addEventListener("submit",e=>{
//   e.preventDefault();
//   const newShoe = {
//       name:document.querySelector("#sneakName").value,
//       color:document.querySelector("#sneakColor").value,
//       owner:document.querySelector("#sneakOwner").value
//   }
//   console.log(newShoe)
//   fetch("/api/sneakers",{
//       method:"POST",
//       body:JSON.stringify(newShoe),
//       headers:{
//           "Content-Type":"application/json"
//       }
//   }).then(res=>{
//       if(res.ok){
//           location.reload()
//       } else {
//           alert("womp womp. something went wrong!")
//       }
//   })
// })

//   render() {
//     return (
//       <div>
//         <h1>Add Me In!</h1>

        
//         <form id="newSneak">
//         <input type="text" placeholder="name" name="name" id="sneakName">
//         <input type="text" placeholder="color" name="color" id="sneakColor">
//         <input type="text" placeholder="owner" name="owner" id="sneakOwner">
//         <button>Submit!</button>
//     </form>
//     <h2>All Sneakers:</h2>
//     {/* <ul id="sneakList"></ul>

//         <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

//         <button className="btn btn-primary" onClick={this.incrementCounter}>Increment: Because I do</button> */}
//       </div>
//     );
//   }
// }
