import React, { Component } from 'react';
import { BusinessFetchTable } from './BusinessFetchTable';
//
// 
export class Edit extends Component {
  static displayName = Edit.name;

  constructor(props) {
    super(props); 
  }
  async formSubmissionHandler(e){
    e.preventDefault();
    console.log("Type: event.target.businessId.value: ", e.target.businessId.value);
    console.log("Type: event.target.type.value: ", e.target.type.value);

    // Example POST method implementation:
    const response = await fetch("/api/businesses/", {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        businessId: e.target.businessId.value, 
        name: e.target.businessName.value , 
        type: e.target.type.value,  yearsInBusiness: e.target.yearsInBusiness.value })
    });
      console.log("respone: ", response);
  }


  render() {
    return (
      <div>
        <h1>Edit</h1>
        <p aria-live="polite"> This is what it feels like to edit on this journey.
        </p>
        <h1>Data: </h1>

          <form onSubmit={this.formSubmissionHandler}>
      <label> Business Id:
          <br/>
          {/* We add input styles. */}
          <input
            // style={inputStyles}
            type='text'
            name='businessId' />
        </label>
        <br/>
      <label> Name:
          <br/>
          {/* We add input styles. */}
          <input
            // style={inputStyles}
            type='text'
            name='businessName' />
        </label>
        <br/>
        <label>Type:
          <br/>
          {/* We add input styles. */}
          <input
            // style={inputStyles}
            type='text'
            name='type' />
        </label>
        <br/>
        <label>Describe yearsInBusiness (reaction):
          <br/>
          {/* We add input styles. */}
          <textarea
            // style={inputStyles}
            name='yearsInBusiness' />
        </label>
        <br/>
        {/* We add button styles. */}
        <button 
        // style={buttonStyles}  
        type='submit'>
          {/* {props.buttonText} */}
          Update Edit
          </button>
      <hr/>
      <BusinessFetchTable />
      </form>
{/* 
        <p aria-live="polite"> <em>Simply, <strong> {this.state.currentCount} </strong> : Because <stong>*YOU* </stong>count</em> </p>

        <button className="btn btn-primary" onClick={this.incrementEdit}>Increment: Because I do</button> */}
      </div>
    );
  }
}