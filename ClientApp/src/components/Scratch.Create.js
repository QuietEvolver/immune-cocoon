import React, { Component } from 'react';
// const express = require("express");
// const router = express.Router();
// const path = require("path");


export class Create extends Component {

  static displayName = Create.name;
  constructor(props){
    super(props);

    const theme = useContext(ThemeContext);

    // New if statement below!
    if (!theme) {
      throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
    }
  
    // We create button styles.
    const buttonStyles = { 
      backgroundColor: theme.buttonBackground, 
      color: theme.textColor, 
    }
  
    // We create input styles.
    const inputStyles = { 
      backgroundColor: theme.inputBackground,
      color: theme.textColor, 
    }

  }
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

  render() {
    return (
      <div>
        <h1>Data: </h1>

          <form>
          {/*   onSubmit={props.formSubmissionHandler}> */}
      <label>Pair Names:
          <br/>
          {/* We add input styles. */}
          <input
            style={inputStyles}
            type='text'
            name='names' />
        </label>
        <br/>
        <label>Location:
          <br/>
          {/* We add input styles. */}
          <input
            style={inputStyles}
            type='text'
            name='location' />
        </label>
        <br/>
        <label>Describe your issue:
          <br/>
          {/* We add input styles. */}
          <textarea
            style={inputStyles}
            name='issue' />
        </label>
        <br/>
        {/* We add button styles. */}
        <button style={buttonStyles}  type='submit'>{props.buttonText}</button>
      </form>
      <hr/>
{/* //         <form id="newSneak">
//         <input type="text" placeholder="name" name="name" id="sneakName">
//         <input type="text" placeholder="color" name="color" id="sneakColor">
//         <input type="text" placeholder="owner" name="owner" id="sneakOwner">
//         <button>Submit!</button>
//     </form>
//     <h2>All Sneakers:</h2> */}
    {/* <ul id="sneakList"></ul>

//         <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

//         <button className="btn btn-primary" onClick={this.incrementCounter}>Increment: Because I do</button> */}
        </div>
    );
  }
}
