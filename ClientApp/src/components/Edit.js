import React, { Component } from 'react';

export class Edit extends Component {
  static displayName = Edit.name;

  // constructor(props) {
  //   super(props); 
  // }
  async formSubmissionHandler(e){
    e.preventDefault();
    console.log("Type: event.target.type.value: ", e.target.type.value);

    // Example PUT method implementation:
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
    console.log ("propsselectedBusiness", this.props.propsSelectedBusiness);
    return (
      <div>
        <h1>Edit</h1>
        <p aria-live="polite"> This is what it feels like to edit on this journey.
        </p>
        <h1>Data: </h1>

          <form onSubmit={this.formSubmissionHandler}>
      <label> Business Id:
          <br/>
          <input
            type='text'
            name='businessId' />
        </label>
        <br/>
      <label> Name:
          <br/>
          <input
            type='text'
            name='businessName' />
        </label>
        <br/>
        <label>Type:
          <br/>
          <input
            type='text'
            name='type' />
        </label>
        <br/>
        <label>Describe yearsInBusiness (reaction):
          <br/>
          <textarea
            name='yearsInBusiness' />
        </label>
        <br/>
        <button 
        type='submit'>
          Update Edit
          </button>
      <hr/>
      </form>
      </div>
    );
  }
}
