import React, { Component } from "react";
import myImage from "./FamilyDoctor-representation.png";

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count Me In!</h1>

        <p>
          This is what it feels like to be incrementally accounted for by your environment.(* and a play button for the kids!)
        </p>

        <p aria-live="polite">
          {" "}
          <em>
            Simply, <strong> {this.state.currentCount} </strong> : Because{" "}
            <strong>*YOU* </strong>count
          </em>{" "}
        </p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>
          Count yourself in
        </button>
        <br/>
        <br></br>
        <p>
          <ul>
            <li>🥣 Restaurants and other food service outlets that show
            empathy and accommodate individuals with food allergies can gain loyal, repeat customers. </li>
            <li>🍴 Inclusion in the food environment
            normalizes the experience of having dietary restrictions or allergies.</li>
            <li>🍽️ Empathy is crucial on both sides for individuals with food allergies/dietary restrictions and restaurant servers and owners.</li> 
          </ul> 
        </p>          
        <img src={myImage} alt="Family Doctor, family/doctor representation" style={{ width: "100%", height: "500px"}}></img>
      </div>
    );
  }
}
